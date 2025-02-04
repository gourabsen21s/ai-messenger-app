# 🌍ECHOVERSE Multilingual Real-Time Chat Application 🌍

## 🚀 Project Overview

This project is a **real-time chat application** where users can communicate across language barriers. It leverages **local AI translation models** to automatically translate messages at the backend, allowing users to chat in their preferred language while the system handles the translation seamlessly.

Users select their known language, send messages, and receive translated responses from others in real-time. This project is built using **Node.js** for real-time communication and a **Flask server** to handle local AI translations.

### ✨ Features
- **Real-Time Messaging**: Users can chat with each other in real-time using Socket.io.
- **AI-Powered Translation**: Local AI model translates messages on the server-side without using external APIs.
- **Multilingual Support**: Send and receive messages in different languages (e.g., English to French or Russian to English).
- **User-Friendly Interface**: Simple and responsive UI for an optimal user experience.
- **Language Customization**: Users can select their primary language, and the system automatically translates incoming and outgoing messages.
- **Scalable Backend**: Flask server with support for local AI models to ensure privacy and responsiveness.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌐 Demo

Check out a live demo of the project:

**[Live Demo Link](#)** _(Add your link here when hosted)_

---

## 🛠️ Installation

Follow these steps to get the project running locally on your machine.

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/multilingual-realtime-chat.git
cd multilingual-realtime-chat
```

### 2. Install Backend Dependencies:
Install all necessary dependencies for both the Node.js and Flask server by running the following commands.

For Python:
```bash
cd server
pip install -r requirements.txt
```

For Node.js:
```bash
npm install
```

### 3. Start the Flask Translation Server:
Ensure you are in the `server` directory and run the server that handles translation:
```bash
cd server
python app.py
```

### 4. Start the Node.js Chat Server:
Open a separate terminal, navigate to the `client` folder, and run:
```bash
cd client
node server.js
```

---

## 📖 Usage

### 1. Access the Application
Once the server is up and running, open your web browser and go to:

```
http://localhost:3000
```

### 2. Enter your Username and Language
- The app will prompt you to enter a username and select your preferred language.
- You can then join a chat room with others who have selected their own preferred languages.

### 3. Start Chatting!
- Type your message in your selected language.
- The recipient will receive your message in their chosen language, and vice-versa.

---

## 💻 Technologies Used

### **Backend**:
- **Node.js**: Server-side JavaScript runtime for real-time communication.
- **Flask**: Python web framework to serve the AI translation model.
- **Socket.IO**: Real-time bidirectional event-based communication.

### **Frontend**:
- **HTML5/CSS3**: Basic structure and styling of the web interface.
- **JavaScript**: Client-side interaction.
- **Bootstrap**: For responsive, modern UI components.

### **AI Models**:
- **PyTorch**: For running the AI models locally.
- **Transformers**: Hugging Face library for loading and running translation models.
- **MarianMT**: Pre-trained translation model for multiple language pairs.

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎉 Acknowledgements

This project uses open-source libraries from the amazing communities at:
- [Node.js](https://nodejs.org)
- [Flask](https://flask.palletsprojects.com)
- [PyTorch](https://pytorch.org)
- [Hugging Face](https://huggingface.co)

---
