const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("API KEY");  
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('frontend'));

let chatRooms = {}; 

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('create_chat', ({ username, language }) => {
        const secretKey = Math.random().toString(36).substr(2, 8);
        chatRooms[secretKey] = { users: {} };
        chatRooms[secretKey].users[socket.id] = { username, language };
        socket.join(secretKey);
        socket.emit('chat_created', { secretKey });

        io.to(secretKey).emit('chat_joined', { username });
        console.log(`Chat created with secret key: ${secretKey}`);
    });

    socket.on('join_chat', ({ secretKey, username, language }) => {
        if (chatRooms[secretKey]) {
            chatRooms[secretKey].users[socket.id] = { username, language };
            socket.join(secretKey);
            io.to(secretKey).emit('chat_joined', { username });
            console.log(`${username} joined chat: ${secretKey}`);
        } else {
            socket.emit('chat_error', { message: 'Invalid secret key' });
        }
    });

    socket.on('send_message', async ({ secretKey, message }) => {
        if (chatRooms[secretKey] && chatRooms[secretKey].users[socket.id]) {
            const sender = chatRooms[secretKey].users[socket.id];

            for (let [socketId, user] of Object.entries(chatRooms[secretKey].users)) {
                if (socketId !== socket.id) { 
                    const translatedMessage = await translateMessage(message, sender.language, user.language);
                    io.to(socketId).emit('receive_message', {
                        sender: sender.username,
                        message: translatedMessage
                    });
                }
            }

            socket.emit('receive_message', {
                sender: "You",
                message: message
            });
        } else {
            socket.emit('chat_error', { message: 'You are not part of this chat' });
        }
    });


    socket.on('disconnect', () => {
        for (let secretKey in chatRooms) {
            if (chatRooms[secretKey].users[socket.id]) {
                delete chatRooms[secretKey].users[socket.id];

                if (Object.keys(chatRooms[secretKey].users).length === 0) {
                    delete chatRooms[secretKey]; 
                }
            }
        }
        console.log('A user disconnected:', socket.id);
    });
});


async function translateMessage(message, fromLang, toLang) {
    if (fromLang === toLang) return message;

    try {
        const prompt = `Translate the following message from ${fromLang} to ${toLang}: "${message}"`;
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Translation error:', error);
        return message;
    }
}

const PORT = 1000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
