import { useEffect, useState } from "react";
import {socket} from "../lib/socketClient";
import {TelemetryData} from "../types"
import { kill } from "process";

export const useSystemConnection = () => {
    const [status, setStatus] = useState('Disconnected')
    const [logs, setLogs] = useState<string[]>([])
    const [telemetryData, setTelemetryData] = useState<TelemetryData>({} as TelemetryData);
    
    const launchApp = (appName: String) => {
        socket.emit('launch_app', {app: appName})
    }

    const killApp = (pid: number) => {
        socket.emit('kill_process', {pid})
    }

    const UpdateBackendConnectionID = () => {
        console.log("Connected to Backend.")
        setStatus(`ID: ${socket.id}`)
    }
    
    useEffect(() => {
        const eventSource = new EventSource('http://localhost:4000/api/logs')

        eventSource.onmessage = (event) => {
            console.log(typeof(event.data))
            setLogs((prevLogs) => [...prevLogs, event.data])
        }

        if(socket.connected){
            UpdateBackendConnectionID()
        }

        socket.on('connect', UpdateBackendConnectionID)

        socket.on('disconnect', () => {
            console.log("Disconnected from Backend.")
            setStatus("Disconnected")
        })

        socket.on('sys_telemetry', (data) => {
            setTelemetryData(data);
        })

        // Clean UP func
        return () => {
            eventSource.close()
            socket.off('connect');
            socket.off('disconnect');
            socket.off('sys_telemetry');
        }
    }, [])

    return { status, telemetryData, logs, launchApp, killApp }
}