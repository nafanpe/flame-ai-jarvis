import subprocess
import threading
import psutil
from network.client import sio

# stream terminal logs to node server
def stream_logs(process):
    for line in iter(process.stdout.readline, b''):
        decoded_line = line.decode('utf-8').strip()
        print(decoded_line)
        sio.emit('terminal_log', decoded_line)

# Open Apps
def handle_app_open(app_name):
    app_launch = f"Executing system command: Launching {app_name}"
    print(app_launch)
    sio.emit('terminal_log', app_launch)
    try:
        app_open_process = subprocess.Popen([app_name], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        # seting as bg process so thread wont be stuck
        threading.Thread(target=stream_logs, args=(app_open_process,)).start()
    except Exception as e:
        error = f"Failed to launch {app_name}. Error: {e}"
        print(error)
        sio.emit('terminal_log', error)

def kill_process(pid):
    try:
        process = psutil.Process(pid)
        process_name = process.name
        process.terminate()

        msg = f"System Command: Terminated {process_name} (PID: {pid})"
        print(msg)
        sio.emit("terminal_log", msg)
    except Exception as e:
        error = f"Failed to terminate PID: {pid}. Error: {e}"
        print(error)
        sio.emit("terminal_log", error)