const Koa = require('koa');
const websocket = require('koa-websocket');
// 基于http 协议构建webscoket 服务
const app = websocket(new Koa());
// es6 提供新的数据结构
// 数组，绝对不会重复
const clients = new Set();

app.use(async (ctx, next) => {
    ctx.body = ` 
    <html>
        <body>
        <div id="messages" style="height: 300px; overflow-y: scroll;"></div>
        <input type="text" id="messageInput" />
        <button onclick="sendMessage()">发送</button>
        <script>
        // html5 新特性 利用webscoket 协议可以和服务端进行通信
        const ws = new WebSocket("ws://localhost:3001");
        ws.onmessage = function(event){
            // console.log(event);
            // 把消息显示到页面上
            const messages = document.getElementById("messages");
            messages.innerHTML += "div" + event.data + "<br>";
        }
        function sendMessage(){
            const msg = document.getElementById("messageInput").value.trim();
            console.log(msg);
            ws.send(msg);
        }
        </script>
        </body>
    </html>
    `
});
// 处理websocket 连接
// ws websocket 缩写
app.ws.use(async (ctx, next) => {
    // 把客户端加入到set 中
    clients.add(ctx.websocket);
    console.log("----------");
    // 监听来自客户端的消息
    ctx.websocket.on('message', (msg) => {
        // console.log(msg,'--------',ctx.websocket);
        // 广播
        for (let client of clients) {
            client.send(msg.toString());
        }
    });
})
// http 伺服
app.listen(3001, () => {
    console.log('server is running at port 3001');
});