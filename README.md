# 🌍EchoVerse - Multilingual Real-Time Chat Application 🌍

--

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Features](#-Features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#Contact)

--

## 🚀 Project Overview

AI Chat Translator is an open-source web application designed to break language barriers by providing real-time translation during chat conversations. Leveraging cutting-edge AI technology and deployed on Microsoft Azure, this application enables users to communicate seamlessly across different languages, making global communication more accessible than ever.
The primary goal of AI Chat Translator is to facilitate effortless multilingual communication. Whether for personal use, business collaboration, or social interaction, users can engage in conversations without worrying about language differences. By translating messages in real time, the application ensures that conversations feel natural and fluid, enhancing the overall user experience.

--

### ✨ Features
🌍 Seamless Communication: Chat with anyone, anywhere, in any language without hesitation. Our intelligent system ensures fluid and natural conversations across linguistic boundaries.

⚡ Real-Time Translation: Experience instant translations powered by our advanced AI model, providing quick and accurate results that make conversations feel natural.

📈 Scalable for Everyone: Designed to adapt to your needs, whether you're part of a small team or managing large global communities. AI Chat Translator grows with you.

🔑 Instant Access with Secret Key: Create a private chat instantly. Simply generate a secret key and share it with your contact for an exclusive, secure conversation.

🔐 Privacy-First: Security is at the heart of our platform. Our encrypted system ensures that only the sender and receiver can access private conversations, keeping your messages safe.

📱 Multi-Device Support: Stay connected anywhere, anytime. Whether on desktop, tablet, or mobile, enjoy seamless chatting across all your devices.

☁️ Deployed on Azure: Our application is deployed on Microsoft Azure, ensuring high availability and performance.

---

## 🌐 Demo

Check out a live demo of the project:

**[Live Demo Link](https://echoverse.azurewebsites.net)**

---

## 🛠️ Installation

Follow these steps to get the project running locally on your machine.

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/multilingual-realtime-chat.git
cd multilingual-realtime-chat
```

### 2. Install Dependencies
Navigate to the project root directory and install the required dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a .env file in the root directory and add your Google Cloud API Key:
```Env
GOOGLE_API_KEY=your_google_api_key_here
```

### 4. Start the Node.js Chat Server:
Open a separate terminal, navigate to the `root` folder, and run:
```bash
node server.js
```

---

## 📖 Usage

### 1. Access the Application
Once the server is up and running, open your web browser and go to:

```
http://localhost:443
```

### 2. Starting a New Chat

Click on "Start New Chat".

Fill in your name and select your preferred language.

Optionally, enter a session ID to join an existing chat or generate a new one.

Click "Join Chat" to proceed to the chat interface.

### 3. Chatting

Type your message in the input area.

Press Enter or click the Send button to send your message.

Your messages will be translated in real-time to the languages of other participants in the session.

### 4. Dark Mode Toggle

Use the dark mode toggle button in the navigation bar to switch between light and dark themes.

Your theme preference will be saved for future visits.

---

## 🚀 Deployment

### 1. Deploying to Azure
Our application is deployed on Azure and is accessible from the internet. To deploy your own instance:

- Create an Azure Account

  If you don't have one, create an account at Azure.

- Set Up an Azure App Service

  Create a new Web App in the Azure Portal.

  Choose the appropriate runtime stack (e.g., Node.js).

  Configure deployment settings according to your needs.

- Configure Environment Variables

  In your Azure Web App settings, add the GOOGLE_API_KEY environment variable with your API key.

- Deploy Your Application

  Use Azure's deployment options to deploy from GitHub, local Git, or FTP.

  Alternatively, use Azure CLI or GitHub Actions for continuous deployment.

- Configure Scaling and Performance Settings

  Adjust settings for auto-scaling, load balancing, and other performance optimizations as needed.

  Consider implementing Azure features like Azure Autoscale and Azure Load Balancer for better scalability.

--

## 📂 Directory Structure

ai-chat-translator/
├── frontend/
│   ├── index.html
│   ├── join.html
│   ├── chat.html
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
├── .env
└── README.md

**frontend/**: Contains the HTML, CSS, and client-side JavaScript files.

- index.html: Landing page with introduction and features.

- join.html: Page where users enter their details to join a chat.

- chat.html: Chat interface where conversations happen.

- app.js: Client-side JavaScript handling page-specific functionality.

**server.js**: Backend server handling Socket.iocommunication and translation API integration.

**package.json**: Contains project metadata and a list of dependencies.

**.env**: Environment variables, including API keys (should not be committed to version control).

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

### Fork the Repository

Click on the "Fork" button on the top right of the repository page to create a copy under your GitHub account.

### Clone Your Fork

```bash
git clone https://github.com/yourusername/ai-chat-translator.git
cd ai-chat-translator
```

### Create a New Branch

```bash
git checkout -b feature/your-feature-name
```

### Make Changes

Implement your feature or bug fix.

### Commit Your Changes

```bash
git commit -am "Add your commit message here"
```

### Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### Submit a Pull Request

Go to the original repository and submit a pull request from your forked branch.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎉 Acknowledgements

This project uses open-source libraries from the amazing communities at:
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Socket.io](https://socket.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Microsoft Azure](https://azure.microsoft.com)
- [Lottie Files](https://lottiefiles.com)
- [DOMPurify](https://github.com/cure53/DOMPurify?form=MG0AV3)

## 📩 Contact

Project Maintainers: Gourab Sen, Souvik Nayak

Email: souviknayak238@gmail.com,

Feel free to reach out with any questions or suggestions.
---
