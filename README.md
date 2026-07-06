<<<<<<< HEAD
# Emotion-Aware Learning Assistant 🤖

An advanced cognitive analytics system featuring an ensemble of **BiLSTM** and **BERT** models to track and analyze student emotional states across various academic disciplines. Built using React, TypeScript, Tailwind CSS, Express, and Google Gemini API integration.

## Key Features

- **Double Model Telemetry**: Displays parallel emotional classifications (BERT & BiLSTM) with confidence levels.
- **Emotion Distribution Bar Charts**: Interactive statistical breakdowns of user learning emotions.
- **Emotional Journey Tracking**: Real-time logging of cognitive state changes.
- **State-Based Multi-User Authentication**: High-fidelity local profile creation with customized color aura selections. Persistent database syncing per-user.
- **Custom Feedback Visualizer**: Responsive interactive components displaying custom analytical responses depending on learning emotions.

---

## 🚀 How to Run in VS Code

Follow these simple steps to run the complete full-stack workspace locally on your computer.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** (comes packaged with Node.js)
- **VS Code** (visual code editor)

---

### Step 1: Clone or Copy the Folder
Open the project directory in VS Code:
1. Launch **VS Code**.
2. Go to **File** -> **Open Folder...** and select this directory.

---

### Step 2: Install Dependencies
Open the VS Code Terminal (`Ctrl + ` ` ` or `Cmd + ` ` ` / **Terminal** -> **New Terminal**) and run:
```bash
npm install
```

---

### Step 3: Configure Environment Variables
Create a file named `.env` in the root directory (the same level as `package.json`). Add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
```
> *Note: If you do not have a Gemini API key yet, you can get one for free at [Google AI Studio](https://aistudio.google.com).*

---

### Step 4: Launch Dev Servers
To run both the **Vite Client** and the **Express Backend Proxy** concurrently, run the following single command in the terminal:
```bash
npm run dev
```

The system will initialize and run on:
- **Local Application Link**: [http://localhost:3000](http://localhost:3000)

Open your web browser and navigate to the link above to experience the complete stunning live dashboard!

---

## 📁 File Structure

```text
├── src/
│   ├── components/
│   │   ├── AuthModal.tsx                  # Beautiful multi-user login & register interface
│   │   ├── EmotionHeatmap.tsx             # Interactive heatmap components
│   │   ├── OpAmpFeedbackVisualizer.tsx    # Responsive interactive visuals
│   │   └── Navbar.tsx                     # Core navigation controls
│   ├── App.tsx                            # Core React layout, states, and telemetry charts
│   ├── main.tsx                           # React rendering mount point
│   ├── index.css                          # Global Tailwind imports & typography theme variables
│   └── types.ts                           # Shared strict TypeScript schemas
├── server.ts                              # Express server proxy with integrated Vite middleware
├── package.json                           # Workspace scripts & npm library dependencies
├── vite.config.ts                         # Custom Vite bundler settings
├── tsconfig.json                          # TypeScript compilation options
└── README.md                              # This setup manual
```

---

## 🛠️ Production Build & Container Deployment

To compile and bundle both the client assets and the server for professional hosting, execute:
```bash
npm run build
```
This compiles the entire frontend into `dist/` and compiles the backend into a single bundled `dist/server.cjs` file using `esbuild`.

To spin up the production instance, run:
```bash
npm start
```
=======
### EMOTION DETECTION AAND LEARNING SUPPORT ENGINE PROJECT
>>>>>>> 5668079a12c18afc9afc193c135e5693820d8913
