# ✨ QuickChat – Real-Time Web Chat App ✨

QuickChat is a comprehensive real-time chat platform that enables seamless communication between users. Built with modern web technologies, this application provides a robust solution for instant messaging with features that enhance user experience and engagement.

The application allows users to create accounts, join various chat rooms or initiate private conversations, and communicate in real-time. With features like typing indicators, online status tracking, and message history, QuickChat offers a complete messaging experience similar to popular chat applications.

Leveraging Socket.IO for bidirectional communication, the platform ensures instant message delivery with minimal latency. The responsive design provides a consistent experience across devices, making it accessible to users on desktop and mobile platforms.

Whether for team collaboration, community engagement, or personal communication, QuickChat offers a secure, efficient, and user-friendly environment for real-time interaction.

---

## 🚀 Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/ankitranjan1028/Quick-Chat.git
cd Quick-Chat
```

2. **Install dependencies**
```bash
cd frontend
npm install
```

```bash
cd ../backend
npm install
```

3. **Setup environment variables**
Create a `.env` file in the `backend` directory with the following:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

4. **Run the application**
Open two terminal windows or split the terminal:

- In one terminal:
```bash
cd frontend
npm run dev
```

- In the second terminal:
```bash
cd backend
npm start
```

---

## ✅ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js with Express  
- **WebSocket:** Socket.IO  
- **Database:** MongoDB (for chat messages and user credentials)

---

## 🎥 Demo Video

[📺 Watch the Demo](#) <!-- Replace '#' with actual video link when available -->

---

## 📄 License

This project is licensed under the MIT License.
