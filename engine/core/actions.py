import subprocess

def handle_app_open(app_name):
    print(f"Executing system command: Launching {app_name}")
    try:
        subprocess.Popen([app_name])
    except Exception as e:
        print(f"Failed to launch {app_name}. Error: {e}")

