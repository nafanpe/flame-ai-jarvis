import { TelemetryData } from "@/types"

type SystemStatusProp = {
    status: String,
    data: TelemetryData
}

export default function SystemStatus({status, data}: SystemStatusProp) {
    return (
        <div className="STATUS absolute right-5 top-5 text-sm flex flex-col items-center ">
            <h2 className="text-xl font-semibold mb-2">System Status</h2>
            <p className="text-zinc-400">
                Backend Connection: 
                <span className={`ml-2 font-mono ${status.includes("Connected") ? "text-emerald-400" : "text-rose-500"}`}>
                    {status}
                </span>
            </p>
            <p>CPU: {data?.cpu}%</p>
            <p>RAM: {data?.ram}%</p>
            <ol>
                <header className="flex justify-center">DISK</header>
                <li>total: {data?.disk?.total} GB</li>
                <li>used: {data?.disk?.used} GB</li>
                <li>free: {data?.disk?.free} GB</li>
                <li>usage: {data?.disk?.usage}%</li>
            </ol>
        </div>
    )
}