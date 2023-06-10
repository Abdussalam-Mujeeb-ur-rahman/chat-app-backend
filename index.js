
const socket = require('socket.io');

const app = require('./app');

const Database = require('./database');

Database.connectToDb();

const server = app.listen(3030, () => {
    console.log('chat-app-backend running on port 3030')
});

const io = socket(server, {
    cors: {
        origin: '*'
    }
});

global.onlineUsers = new Map();

io.on('connection', socket => {
    global.chatSocket = socket;

    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on('send-msg', data => {
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket) {
            socket.to(sendUserSocket).emit('msg-receive', data.message)
        }
    })


})