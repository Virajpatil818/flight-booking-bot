document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    document.getElementById('chat-window').innerHTML += `<div>You: ${message}</div>`;
    document.getElementById('message').value = '';

    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'message',
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.text) {
            document.getElementById('chat-window').innerHTML += `<div>Bot: ${data.text}</div>`;
        }
    })
    .catch(error => console.error('Error:', error));
});
