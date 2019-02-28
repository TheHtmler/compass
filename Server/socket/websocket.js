function websocket(server) {
    const io = require('socket.io')(server)
    io.on('connection', (socket) => {
        console.log('socket connect!')
        socket.on('hi', function(data) {
            console.log(data)
        })
        socket.emit('open', 'Randy11122')
    })
}
module.exports = websocket