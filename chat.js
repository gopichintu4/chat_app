document.addEventListener('DOMContentLoaded', () => {
    const user1 = prompt('Enter User 1 ID:');
    const user2 = prompt('Enter User 2 ID:');
    let currentUser = user1;

    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });

    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${currentUser}: ${message}`;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';

        // Switch user for the next message
        currentUser = (currentUser === user1) ? user2 : user1;

        // Scroll to the bottom of the chat on new message
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  });