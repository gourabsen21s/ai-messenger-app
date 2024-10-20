const socket = io();
document.getElementById('join-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const language = document.getElementById('language').value;
    if (username && language) {
        socket.emit('join', { username, language });
        document.getElementById('join-chat').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';
    }
});
socket.on('receive_message', (data) => {
    const messageList = document.getElementById('messages');
    const newMessage = document.createElement('li');
    newMessage.className = 'message-item';
    newMessage.innerHTML = `<strong>${data.sender}:</strong> ${data.message}`;
    messageList.appendChild(newMessage);
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
});
document.getElementById('send-btn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    if (message) {
        socket.emit('send_message', { message });
        document.getElementById('message').value = '';
    }
});
