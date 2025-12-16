# 🌍 Abitalk

<div align="center">

**A modern language exchange platform connecting learners worldwide**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.13.2-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Stream](https://img.shields.io/badge/Stream-Chat%20%26%20Video-FF6B6B)](https://getstream.io/)

</div>

---

## 📖 About

**Abitalk** is a full-stack language exchange platform that helps language learners connect with native speakers. Users can find language partners, send friend requests, chat in real-time, and engage in video calls to practice their target languages.

---

## ✨ Features

- 🔐 **Authentication** - Secure user registration, login, and JWT-based authentication
- 👥 **Friend System** - Send/accept friend requests and manage connections
- 🔍 **Smart Recommendations** - Discover language partners based on learning goals
- 💬 **Real-time Chat** - One-on-one messaging with Stream Chat
- 📹 **Video Calls** - High-quality video calls with Stream Video SDK
- 🌓 **Theme Support** - Dark/Light mode toggle
- 📱 **Responsive Design** - Works seamlessly on all devices

---

## 🛠 Tech Stack

### Frontend
- React 19, Vite, React Router
- TanStack Query, Zustand
- Tailwind CSS, DaisyUI
- Stream Chat React, Stream Video React SDK
- Axios, React Hot Toast, Lucide React

### Backend
- Node.js, Express.js
- MongoDB, Mongoose
- JWT, bcryptjs
- Stream Chat SDK
- CORS, Cookie Parser

---

## ⚙️ Environment Variables

### Backend (`.env` in `backend/` directory)

```env
PORT=5000
NODE_ENV=development
MONGO_URL=mongodb://localhost:27017/abitalk
JWT_SECRET=your-super-secret-jwt-key-here
STREAM_API_KEY=your-stream-api-key
STREAM_API_SECRET=your-stream-api-secret
```

### Frontend (`.env` in `frontend/` directory)

```env
VITE_API_URL=http://localhost:5000/api
VITE_STREAM_API_KEY=your-stream-api-key
```

> **Note:** Get your Stream API keys from [getstream.io](https://getstream.io/)

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Abitalk

# Install dependencies
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Start Backend

```bash
cd backend
npm run dev
```

Backend runs on `http://localhost:5000`

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 👨‍💻 Author

**Abinash Behera**

---

<div align="center">

**Made with ❤️ for language learners worldwide**

⭐ **If you find this project helpful, please give it a star!** ⭐

</div>
