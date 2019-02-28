<template>
    <div class="logs">
        <h3>Logs</h3>
        <input type="text" v-model="sendData">
        <button @click="sendMsg(sendData)">Send</button>
    </div>
</template>

<script>
    import io from 'socket.io-client'
    
    export default {
        data() {
            return {
                ws: null,
                socket: null,
                sendData: ''
            }
        },
        created() {
            this.initWebSocket()
        },
        methods: {
            initWebSocket() {
                this.socket = io.connect('ws://localhost:5000')
                this.socket.on('open', function(e) {
                    console.log('已连接')
                    console.log(e)
                })
                // const wsUri = 'ws://localhost:40510'
                // this.ws = new WebSocket(wsUri)
                // this.ws.onopen = this.webSocketOnOpen()
                // this.ws.onerror = this.webSocketOnError()
                // this.ws.onmessage = this.webSocketOnMessage()
                // this.ws.onclose = this.webSocketOnClose()
            },
            webSocketOnOpen() {
                console.log('WebSocket connect success!')
            },
            webSocketOnError() {
                console.log('WebScoket connect failed!')
            },
            webSocketOnMessage(e) {
                console.log(e)
                // let resData = JSON.parse(e)
                // console.log(resData)
            },
            webSocketSend(agentData) {
                console.log(this.readyState)
                this.ws.send(agentData)
            },
            webSocketOnClose() {
                console.log('WebSocket closed!')
            },
            sendMsg(data) {
                this.webSocketSend(data)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
