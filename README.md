# 🌐 ChatWorld — Web-Based Real-Time Chat Application

ChatWorld is a real-time web-based chat application built with **Node.js**, **Express**, and **Socket.IO**. Users can log in or register using a username/password system (stored in `users.json`) and chat with other online users in a shared space.

> 💬 Built for local networks, ideal for demo projects, LAN chat, or educational purposes.

---

## 📸 Screenshot

![ChatWorld UI](./screenshot.png)

---

## 🚀 Features

- 🌍 Real-time chat using Socket.IO
- 👤 Login / Register system with credential verification
- 📄 Credentials stored in a local `users.json` file
- 🎨 Clean and modern UI with HTML, CSS & JavaScript
- 💬 All users join a common chat room via a single link
- 🖥️ Run across multiple desktops on the same network

---

## 🧱 Tech Stack

| Layer        | Tech                 |
|--------------|----------------------|
| Frontend     | HTML, CSS, JS        |
| Backend      | Node.js, Express     |
| Real-time    | Socket.IO            |
| Data Storage | `users.json`         |

---

## 📁 Project Structure

ChatWorld-Web/
├── server.js # Express + Socket.IO backend
├── index.html # Login and chat frontend
├── style.css # Chat UI styling
├── script.js # Frontend logic (login, chat)
├── users.json # User login credentials

---

## 🔧 Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/your-username/ChatWorld-Web.git
cd ChatWorld-Web
```
Install dependencies
```
npm install express socket.io
```
Run the server
```
node server.js
```
✅ Server runs at: http://localhost:3000

👨‍💻 Developed by
Vamsi Krishna B

Built with ❤️ using VS Code, Node.js, and Web Sockets
