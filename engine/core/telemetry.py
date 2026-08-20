import psutil
import time

def get_system_stats():
    gb = 1024 ** 3

    cpu_usage = psutil.cpu_percent(interval=1)
    ram_usage = psutil.virtual_memory().percent
    disk_info = psutil.disk_usage('/')


    return {
        'cpu': cpu_usage,
        'ram': ram_usage,
        'disk': {
            'total': round(disk_info.total / gb, 2),
            'used': round(disk_info.used / gb, 2),
            'free': round(disk_info.free / gb, 2),
            'usage': round(disk_info.percent),
        },
        'time': time.strftime("%H:%M:%S")
    }
