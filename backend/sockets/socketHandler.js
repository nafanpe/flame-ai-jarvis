const eventBus = require('../utils/eventBus')

const handleSocketConnection = (io, socketName, socket) => {
    socket.on(socketName, (data) => {
        if(data){
            io.emit(socketName, data)
        } else {
            console.log("no data received from engine/web");
        }
    })
}

const setupSockets = (io) => {
    io.on('connection', (socket) => {
        console.log("A user just connected with id:", socket.id)
    
        socket.on('disconnect', () => {
            console.log('User Disconnected with id:', socket.id);
        })

        socket.on('terminal_log', (log_message) => {
            eventBus.emit('new_log', log_message)
        })

        handleSocketConnection(io, 'sys_telemetry', socket)
        handleSocketConnection(io, 'launch_app', socket)
        handleSocketConnection(io, 'kill_process', socket)
    })
}

module.exports = setupSockets;