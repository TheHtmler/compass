function websocket(server) {
    const io = require('socket.io')(server)
    io.on('connection', (socket) => {
        console.log('socket connect!')
        socket.emit('open', 'Randy')
    })
}
module.exports = websocket