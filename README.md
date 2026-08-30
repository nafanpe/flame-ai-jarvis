# Flame AI (System Assistant)

**Status:** Architecture Design Phase  
**Tech Stack:** Next.js (TS/Tailwind), Node.js (Express/Socket.io), Python (AI/OS Core)  
**OS Requirements:** Linux-based OS only (currently)

Flame AI is a modular, Jarvis-like assistant designed to provide real-time system monitoring, process management, local application control, and eventually, full autonomous AI capabilities.

---

## 1. System Architecture (The "Microservice" Approach)

Flame AI operates as three distinct microservices running locally on your machine.

### Tier 1: Frontend (The Glass)
- **Stack:** Next.js, React, TypeScript, Tailwind CSS.
- **Role:** Renders a gorgeous, real-time dashboard. TypeScript ensures that the data sent to the backend is strictly formatted. Tailwind provides a fast, dark-mode, futuristic UI.

### Tier 2: The Router (The Nervous System)
- **Stack:** Node.js, Express, Socket.io.
- **Role:** A lightweight, insanely fast message broker. It handles incoming HTTP requests and WebSocket connections, routing UI commands to Python and pushing Python's system alerts to the UI.

### Tier 3: The Core (The Brain & Hands)
- **Stack:** Python, `python-socketio`, `psutil`, `pyautogui`, local LLMs (Ollama/HuggingFace).
- **Role:** Executes terminal commands, reads the file system, automates the mouse/keyboard, and runs heavy AI models.

---

## 2. Feature Roadmap: Start to Finish (A - Z)

Building a complete "Jarvis" takes time. We must separate features into distinct, manageable phases so you actually finish the project.

### Phase 1: The MVP (Basic Control & Telemetry) [**COMPLETED**]
The goal of the MVP is purely communication. Can the UI see the computer, and can the UI control the computer? No AI yet.
- **System Telemetry (Read):** Real-time graphs for CPU, RAM, Disk Space, and Network Ping using `psutil`.
- **App Launcher (Write):** A grid of buttons on the Next.js UI to instantly open specific apps (VS Code, Spotify, Browser) using Python's `subprocess`.
- **Terminal Logs:** A live-scrolling terminal window in the UI that displays stdout/stderr from Python.
- **Basic Process Management:** Ability to view the top 5 most demanding background processes and kill them via the UI.
- *MVP Completion Criteria:* MVP is "done" when you can open the Next.js app in your browser, see live CPU graphs updating smoothly via WebSockets, click a button to open VS Code, and see a success log in the UI terminal.

### Phase 2: Enhanced Automation (The "Hands")
Once MVP is stable, we give Flame AI deeper access to the operating system.
- **Media & Volume Control:** Play/pause music, skip tracks, and change system volume globally using Python OS libraries.
- **Window Management:** Minimize all windows, lock the screen, or switch focus between apps.
- **Macro Execution:** Create complex routines. E.g., clicking "Dev Mode" on the UI opens VS Code, starts a local Docker container, opens a specific browser tab, and starts your Spotify playlist.

### Phase 3: The Brain (AI & NLP Integration)
This is where it becomes "Jarvis." We introduce local AI to translate human language into Python commands.
- **Natural Language Processing (NLP):** Instead of clicking a button, you type: "Flame, close all my background apps and open my project folder."
- **Local LLM Integration:** Use an API like Ollama or Llama.cpp to run a local language model in Python.
- **Function Calling:** The LLM parses your text, determines the intent, and triggers the specific Python functions we built in Phase 1 & 2.
- **Contextual Awareness:** Flame AI can "read" what is currently open on your screen (using basic screenshot parsing or window titles) to understand context.

### Phase 4: Sensory Input (Voice & Vision)
The final frontier. True autonomy.
- **Voice Recognition:** Integrate OpenAI's Whisper (running locally via Python) to listen to a microphone continuously.
- **Wake Word Activation:** Train a lightweight model to listen specifically for "Hey Flame" to trigger the listening pipeline.
- **Text-to-Speech (TTS):** Integrate a fast TTS engine (like ElevenLabs API or local Coqui TTS) so Flame AI responds audibly.
- **Vision:** Ability to take a screenshot, pass it to a Vision-Language Model, and ask, "What am I looking at on my screen right now?"

---


## 🛠️ Getting Started

### Prerequisites
- **Linux-based Operating System** (Required for OS-level integration)
- Node.js & npm
- Python 3
- Virtual Environment (`venv`)

### Installation

1. **Install Root Dependencies:**
   ```bash
   npm install
   ```
2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```
3. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```
4. **Setup Python Engine:**
   ```bash
   cd engine
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

### 🏃‍♂️ Running the System

You can start all three modules (Frontend, Backend, and Engine) concurrently from the root directory. 

**Option 1: Using Concurrently (Single Terminal)**
```bash
npm run startall
```
*(This requires the `concurrently` package which is installed in the root `package.json`)*

**Option 2: Using the Bash Script (Multiple Terminals)**
If you prefer having separate terminal windows for each module:
```bash
chmod +x start.sh
./start.sh
```
