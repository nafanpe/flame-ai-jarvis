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
})

module.exports = router