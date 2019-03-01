<template>
    <div class="logs">
        <h3>Logs</h3>
        <input type="text" v-model="sendData">
        <button @click="sendMsg(sendData)">Send</button>
    </div>
</template>

<script>
    import io from 'socket.io-client'
    let socketUri = ''
    
    export default {
        data() {
            return {
                ws: null,
                socket: null,
                sendData: ''
            }
        },
        created() {
            this.socketIO()
        },
        methods: {
            socketIO() {
                if(location.hostname == 'localhost' || location.hostname == '127.0.0.1') {
                    socketUri = 'http://localhost:5000'
                } else {
                    socketUri = 'http://140.143.232.62:8080'
                }
                // this.socket = io.connect('ws://140.143.232.62')
                this.socket = io.connect(socketUri)
                this.socket.on('open', function(e) {
                    console.log('已连接')
                    console.log(e)
                })
            },
            sendMsg(data) {
                this.socket.emit('hi', data)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
