const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('frontend'));

let users = {};
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('join', ({ username, language }) => {
        users[socket.id] = { username, language };
        console.log(`${username} (${language}) has joined the chat.`);
    });
    socket.on('send_message', async (data) => {
        const sender = users[socket.id];
        const message = data.message;
        for (let [socketId, user] of Object.entries(users)) {
            if (socketId !== socket.id) {
                const translatedMessage = await translateMessage(message, sender.language, user.language);
                io.to(socketId).emit('receive_message', {
                    sender: sender.username,
                    message: translatedMessage
                });
            }
        }
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        delete users[socket.id];
    });
});
async function translateMessage(message, fromLang, toLang) {
    if (fromLang === toLang) {
        return message; 
    }

    try {
        const response = await axios.post('http://localhost:8000/translate', {
            message,
            fromLang,
            toLang
        });
        return response.data.translatedText;
    } catch (error) {
        console.error('Error during translation:', error);
        return message; 
    }
}

const PORT = 1000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
