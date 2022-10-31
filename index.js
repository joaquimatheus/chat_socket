const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get("/styles.css", (req, res) => {
    res.sendFile(__dirname + '/styles.css')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});
