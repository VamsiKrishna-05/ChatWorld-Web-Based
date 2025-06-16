
const socket = io();
let currentUser = null;

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ user, pass })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      currentUser = user;
      document.getElementById('login-section').classList.add('hidden');
      document.getElementById('chat-section').classList.remove('hidden');
    } else {
      document.getElementById('login-message').innerText = data.message;
    }
  });
}

function register() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  fetch('/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ user, pass })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('login-message').innerText = data.message;
  });
}

function sendMessage() {
  const msg = document.getElementById('message').value;
  if (msg.trim()) {
    socket.emit('chat message', { user: currentUser, message: msg });
    document.getElementById('message').value = '';
  }
}

function logout() {
  location.reload();
}

function handleKey(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
}

socket.on('chat message', data => {
  const box = document.getElementById('chat-box');
  box.innerHTML += `<p><strong>${data.user}:</strong> ${data.message}</p>`;
  box.scrollTop = box.scrollHeight;
});
