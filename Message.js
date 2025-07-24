function validateForm() {
    const message = document.getElementById("message").value;
    const password = document.getElementById("password").value;
    const correctPassword = "Damelsaiscool"; // Desired password

    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    if (password !== correctPassword) {
        alert("Incorrect password.");
        return false;
    }

    // If validation passes, store the message with timestamp
    storeMessage(message);
    return false; // Prevent form submission
}

function storeMessage(message) {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    const timestamp = new Date().toLocaleString();
    messages.push({ text: message, time: timestamp });
    localStorage.setItem("messages", JSON.stringify(messages));
    document.getElementById("message").value = ""; // Clear the message input
}

function displayMessages() {
    const messagesDiv = document.getElementById("messages");
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messagesDiv.innerHTML = ""; // Clear previous messages
    messages.forEach(msg => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<p>${msg.text}</p><small>${msg.time}</small>`;
        messagesDiv.appendChild(messageElement);
    });
}

// Call displayMessages when the messages page loads
if (document.getElementById("messages")) {
    displayMessages();
}
