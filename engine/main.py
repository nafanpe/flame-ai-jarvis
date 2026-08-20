import time
from socketio.exceptions import ConnectionError
from network.client import sio
import network.events

def start_engine():
    # Reconnect when crashed
    connected = False
    while not connected:
        try:
            sio.connect("http://localhost:4000")
            connected = True
        except ConnectionError:
            print("Waiting for Node.js backend to start... retrying in 2 seconds.")
            time.sleep(2)
    sio.wait()

if __name__ == '__main__':
    start_engine()