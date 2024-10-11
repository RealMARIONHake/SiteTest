const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');

// Load messages from local storage
function loadMessages() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
    });
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to bottom
}

// Save a new message to local storage
function saveMessage(message) {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push(message);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Send button event
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        saveMessage(message);
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messageInput.value = '';
    }
});

// Initial load of messages
loadMessages();

// Simple game logic for demonstration
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

// Placeholder for game logic
function drawGame() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
drawGame();
