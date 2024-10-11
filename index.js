<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>My Platform</title>
</head>
<body>
    <div class="container">
        <div class="chat-box">
            <h2>Chat</h2>
            <div id="messages"></div>
            <input id="message-input" type="text" placeholder="Type a message...">
            <button id="send-btn">Send</button>
        </div>
        <div class="game-box">
            <h2>Game Area</h2>
            <canvas id="gameCanvas"></canvas>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
