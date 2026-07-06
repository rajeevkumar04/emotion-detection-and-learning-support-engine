# Emotion Detection and Learning Support Engine 🎭📚

An AI-powered web application that detects students' emotions through facial expressions and provides personalized learning support based on their emotional state. The system combines Artificial Intelligence, Machine Learning, and Modern Web Technologies to enhance the online learning experience by recognizing emotions in real time and recommending suitable learning resources and motivational feedback.

---

## 📖 Project Overview

The **Emotion Detection and Learning Support Engine** is an intelligent learning assistant designed to improve students' academic performance by understanding their emotional state during learning sessions.

Using a webcam, the application captures facial expressions, detects emotions using an AI model, and generates personalized learning recommendations. The system also records emotion history, enabling learners and educators to analyze emotional trends over time.

---

## ✨ Features

* 🎭 Real-time facial emotion detection
* 📷 Webcam-based emotion recognition
* 🤖 AI-powered learning recommendations
* 📚 Personalized study suggestions
* 📊 Emotion analytics dashboard
* 📈 Emotion history tracking
* 🔒 User authentication
* 🌙 Responsive and modern user interface
* ⚡ Fast and interactive performance
* 💡 Intelligent learning assistance

---

## 🛠️ Technologies Used

### Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* HTML5
* CSS3

### Backend

* Python
* FastAPI

### Artificial Intelligence & Machine Learning

* TensorFlow
* OpenCV
* MediaPipe
* NumPy

### Development Tools

* Visual Studio Code
* Git
* GitHub

---

## 📁 Project Structure

```text
emotion-aware-learning-assistant/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AuthModal.tsx
│   │   ├── EmotionHeatmap.tsx
│   │   ├── Navbar.tsx
│   │   └── OpAmpFeedbackVisualizer.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── types.ts
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── emotion_model.py
│   └── utils.py
│
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── .gitignore
├── .env.example
└── README.md
```

---

## ⚙️ Prerequisites

Before running the project, ensure the following software is installed:

* Node.js (v18 or later)
* npm
* Python 3.11+
* pip
* Git
* Visual Studio Code

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rajeevkumar04/emotion-detection-and-learning-support-engine.git
```

### 2. Navigate to the Project

```bash
cd emotion-detection-and-learning-support-engine
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
cd ..
```

### 5. Configure Environment Variables

Create a `.env` file in the project root and add your API key if required.

Example:

```env
GEMINI_API_KEY=AQ.Ab8RN6Iy_ADb4ohQi5yqS3XbudyaNd3enpq8d_gn3xIL9AsSUA
```

---

## ▶️ Running the Application

### Start the Backend

```bash
cd backend
uvicorn app:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

### Start the Frontend

Open another terminal:

```bash
npm run dev
```

The frontend will run at:

```text
http://127.0.0.1:3000/
```

---
## 🌐 Live Demo

Frontend:
https://emotion-detection-and-learning-supp-seven.vercel.app/

Backend API:
https://emotion-detection-and-learning-support.onrender.com

## 🔄 Workflow

1. User opens the application.
2. User signs in to the platform.
3. Webcam captures facial expressions.
4. AI model processes the image.
5. Emotion is detected.
6. Personalized learning recommendations are generated.
7. Results are displayed on the dashboard.
8. Emotion records are stored for future analysis.

---

## 📊 Supported Emotions

* 😊 Happy
* 😢 Sad
* 😠 Angry
* 😨 Fear
* 😲 Surprise
* 😐 Neutral
* 🤢 Disgust

---

## 🎯 Applications

* Smart Education
* Online Learning Platforms
* Student Mental Well-being
* Personalized Learning Systems
* Academic Performance Analysis
* AI-based Learning Assistance

---

## 🚀 Future Enhancements

* Voice emotion recognition
* Mobile application
* Multi-language support
* Teacher analytics dashboard
* Cloud deployment
* Advanced AI recommendation engine
* Student performance prediction
* Learning progress visualization

---

## 📸 Screenshots

### Home Page
<img width="1905" height="972" alt="image" src="https://github.com/user-attachments/assets/3245b181-93e9-4948-a9eb-bc83b8574162" />
### Login Page
<img width="1916" height="965" alt="image" src="https://github.com/user-attachments/assets/f854dfa9-4747-4993-8dfb-1b628c5898f6" />

### Emotion Detection

<img width="1285" height="907" alt="image" src="https://github.com/user-attachments/assets/e531ab93-cc13-4d20-94df-f630409c202d" />


### Dashboard

<img width="1312" height="662" alt="image" src="https://github.com/user-attachments/assets/c8eb4a75-9ef6-4f1e-bebc-69f3da105ee0" />


---

## 👨‍💻 Author

**Rajeev Kumar**

GitHub: https://github.com/rajeevkumar04

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push to your branch.
5. Create a Pull Request.

---

## 📄 License

This project is developed for educational and internship purposes.

---

## ⭐ Acknowledgements

Special thanks to the open-source community and the developers of TensorFlow, OpenCV, MediaPipe, React, FastAPI, and Vite for providing the tools and frameworks that made this project possible.
