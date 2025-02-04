const socket = io();
let secretKey = null;
document.getElementById('create-chat-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const language = document.getElementById('language').value;
    if (username && language) {
        socket.emit('create_chat', { username, language });
    }
});

document.getElementById('join-chat-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const language = document.getElementById('language').value;
    secretKey = document.getElementById('secret-key').value;
    if (username && language && secretKey) {
        socket.emit('join_chat', { secretKey, username, language });
    }
});

socket.on('chat_created', (data) => {
    secretKey = data.secretKey;
    alert(`Your chat room is created! Share this key: ${secretKey}`);
    document.getElementById('join-section').style.display = 'none';
    document.getElementById('chat-interface').style.display = 'block';
});

socket.on('chat_joined', (data) => {
    document.getElementById('join-section').style.display = 'none';
    document.getElementById('chat-interface').style.display = 'block';

    const messageList = document.getElementById('messages');
    const newMessage = document.createElement('li');
    newMessage.className = 'message-item system-message';
    newMessage.textContent = `${data.username} has joined the chat.`;
    messageList.appendChild(newMessage);
});

socket.on('chat_error', (data) => {
    alert(data.message);
});

document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    if (message && secretKey) {
        socket.emit('send_message', { secretKey, message });
        document.getElementById('message').value = '';

        const messageList = document.getElementById('messages');
        const newMessage = document.createElement('li');
        newMessage.className = 'message-item self-message';
        newMessage.innerHTML = `<strong>You:</strong> ${message}`;
        messageList.appendChild(newMessage);
    }
});

socket.on('receive_message', (data) => {
    const messageList = document.getElementById('messages');
    const newMessage = document.createElement('li');
    newMessage.className = 'message-item';
    newMessage.innerHTML = `<strong>${data.sender}:</strong> ${data.message}`;
    messageList.appendChild(newMessage);
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
});
