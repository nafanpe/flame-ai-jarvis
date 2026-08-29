from .client import sio
import threading
from core.telemetry import get_system_stats
from core.actions import handle_app_open, kill_process

def broadcast_telemetry():
    while True:
        telemetry_data = get_system_stats()
        sio.emit('sys_telemetry', telemetry_data)

# EVENTS
@sio.event
def connect():
    print("Connected to Node JS Hub!")
    threading.Thread(target=broadcast_telemetry, daemon=True).start()

@sio.event
def disconnect():
    print("Disconnected from Node JS Hub!")

@sio.on('launch_app') # type: ignore
def on_launch_app(data):
    app_name = data.get('app')
    print(f'command received, Launching {app_name}')
    handle_app_open(app_name)

@sio.on('kill_process') # type: ignore
def on_kill_process(data):
    pid = data.get("pid")
    if pid:
        kill_process(pid)