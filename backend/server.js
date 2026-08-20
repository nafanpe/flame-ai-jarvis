// Import libs
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors')

// Import Seperated modules
const apiRoutes = require('./routes/api')
const setupSockets = require('./sockets/socketHandler')

// initialize server
const app = express();
const httpServer = createServer(app)

// middlewares
app.use(cors({ origin: "http://localhost:3000" }))
app.use('/', apiRoutes)

const io = new Server(httpServer, {
    cors: {origin: "http://localhost:3000"}
})

setupSockets(io)

// Start the server
httpServer.listen(4000, () => {
    console.log("Server is running on http://localhost:4000")
})