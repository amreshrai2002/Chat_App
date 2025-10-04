# Real-Time Chat Application 🚀

Starting Page
<img width="1823" height="1010" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/50ad4137-c41c-4137-80fd-e42b3a0e69b3" />

A full-stack, real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. This app allows users to communicate instantly, create group chats, and personalize their experience with dynamic themes.

---

## ✨ Features

* **Real-time Messaging**: Instant message delivery using WebSockets.
* **User Authentication**: Secure user registration and login with JWT (JSON Web Tokens).
* **One-on-One & Group Chats**: Seamlessly switch between private and group conversations.
* **Online Status**: See which users are currently online.
* **Typing Indicators**: Know when someone is typing a message.
* **Customizable Themes**: Switch between light, dark, and other themes to personalize the UI.
* **Responsive Design**: A clean and modern interface that works on all device sizes.

---

## 🛠️ Tech Stack

This project is built with the following technologies:

* **Frontend**: React, CSS3 (with CSS Variables for theming)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (with Mongoose)
* **Real-time Communication**: Socket.IO
* **Authentication**: JSON Web Tokens (JWT)



---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.
* [Node.js](https://nodejs.org/) (which includes npm)
* [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas cloud instance)

### Installation

1.  **Clone the repository**
    ```sh
    git clone "https://github.com/amreshrai2002/Chat_App.git"
    cd Chat_app
    ```

2.  **Install Backend Dependencies**
    ```sh
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```sh
    cd ../frontend
    npm install
    ```

4.  **Set Up Environment Variables**

    Create a `.env` file in the `backend` directory and add the following variables. A `.env.example` file should be in the repository to show the required variables.

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    NODE_ENV='development'
    CLIENT_URL="http://localhost:5173"

    CLOUDINAR_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_secret_key
    ```

### Running the Application

1.  **Start the Backend Server** (from the `/backend` directory)
    ```sh
    npm start
    ```
    Your server will be running on `http://localhost:5000`.

2.  **Start the Frontend Development Server** (from the `/frontend` directory)
    ```sh
    npm start
    ```
    Your application will open in your browser at `http://localhost:3000`.

---

## 📄 API Endpoints

A brief overview of the core API routes available:

| HTTP Method | Endpoint            | Description                  |
|-------------|---------------------|------------------------------|
| `POST`      | `/api/auth/register`| Register a new user          |
| `POST`      | `/api/auth/login`   | Log in an existing user      |
| `GET`       | `/api/users`        | Get all users for sidebar    |
| `POST`      | `/api/messages/send/:id` | Send a message to a user |
| `GET`       | `/api/messages/:id` | Get messages with a user     |

---

## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 📬 Contact

Amresh Rai - raiamresh2002@gmail.com

Project Link: https://realtime-chat-app-9970.onrender.com/
