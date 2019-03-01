function websocket(server) {
    const io = require('socket.io')(server)
        // io.origins((origin, callback) => {
        //     if (origin !== 'http://140.143.232.62') {
        //         return callback('Origin not allowed', false)
        //     }
        //     callback(null, true)
        // })
    io.set('origins', '*:*')
    io.on('connection', (socket) => {
        console.log('socket connect!')
        socket.on('hi', function(data) {
            console.log(data)
        })
        socket.emit('open', 'Randy11122')
    })
}
module.exports = websocket