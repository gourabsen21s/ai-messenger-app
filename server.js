const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Handle real-time connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('sendMessage', (data) => {
        console.log('Message received:', data);

        // Broadcast the message to all users
        io.emit('receiveMessage', data);
    });
    socket.on('sendMessage', (data) => {
        console.log('Message received:', data);
    
        // Broadcast the message to all users
        io.emit('receiveMessage', data); // Send the entire data object back
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
