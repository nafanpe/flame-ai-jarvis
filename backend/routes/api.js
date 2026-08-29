const eventBus = require('../utils/eventBus')   
const express = require('express')
const router = express.Router();

// test route
router.get('/', (req, res) => {
    res.send("telemetry Data test")
})

// SSE route for server logs
router.get('/api/logs', (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    }
    res.writeHead(200, headers)
    res.write("data: Stream Connected\n\n")

    const logListener = (logMessage) => {
        res.write(`data: ${logMessage}\n\n`)
    }

    eventBus.on('new_log', logListener)

    req.on('close', () => {
        eventBus.removeListener('new_log', logListener);
    })
})

module.exports = router