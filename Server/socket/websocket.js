function websocket(server) {
    const io = require('socket.io')(server)
        // io.set('origins', '*:*')
    io.on('connection', (socket) => {
        console.log('socket connect!')
        socket.on('hi', function(data) {
            console.log(data)
        })
        setInterval(() => {
            socket.emit('open', new Date())
        }, 1000)
    })
}
module.exports = websocket