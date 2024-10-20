const socket = io();

// Handle send button click
document.getElementById('send-btn').addEventListener('click', () => {
    const senderLang = document.getElementById('sender-language').value;
    const receiverLang = document.getElementById('receiver-language').value;
    const message = document.getElementById('message-input').value;

    // Send message to the server
    socket.emit('sendMessage', { message, senderLang, receiverLang });

    // Clear input field
    document.getElementById('message-input').value = '';
});

// Receive message from server
socket.on('receiveMessage', (data) => {
    const chatDisplay = document.getElementById('chat-display');
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `(${data.receiverLang}) ${data.message}`; // Display translated message with receiver language

    chatDisplay.appendChild(messageDiv);
});
