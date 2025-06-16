
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());

const USERS_FILE = path.join(__dirname, 'users.json');

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return {};
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post('/login', (req, res) => {
  const users = readUsers();
  const { user, pass } = req.body;
  if (users[user] && users[user] === pass) {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

app.post('/register', (req, res) => {
  const users = readUsers();
  const { user, pass } = req.body;
  if (users[user]) {
    res.json({ success: false, message: 'Username already exists' });
  } else {
    users[user] = pass;
    saveUsers(users);
    res.json({ success: true, message: 'Registered successfully' });
  }
});

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
