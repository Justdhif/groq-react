<div align="center">

# ⚡ Groq AI Assistant

**A High-Performance, Privacy-First AI Chat Assistant Powered by Groq**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Groq AI](https://img.shields.io/badge/Groq-AI-F55036?style=for-the-badge&logo=openai&logoColor=white)](https://groq.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

---

</div>

## 📌 Overview

**Groq AI Assistant** is a high-performance, single-page web utility engineered for developers seeking lightning-fast artificial intelligence reasoning directly in their workspace. Powered by the state-of-the-art **Llama 3.1 8B Instant** model on the Groq inference engine, this assistant delivers responses in milliseconds (~500+ tokens/second) with a massive 128k token context window.

Built with a **Privacy-First Client Architecture**, the application communicates directly from the client's browser to the Groq API utilizing secure env variables, ensuring your prompts are never stored on intermediate database servers. The interface includes markdown processing, code highlighting, copy-to-clipboard utilities, and a fully fluid, responsive design.

---

## ✨ Key Features & Capability Matrix

### 🧠 1. Ultra-Fast Groq Inference Engine
* **Llama 3.1 Power**: Uses the latest decommissioned-replacement standard (`llama-3.1-8b-instant`).
* **High-Speed Rendering**: Streamlined Groq SDK calls executing in sub-second latency.
* **Large Context Handling**: Easily parse long instruction sets and code blocks up to 131,072 tokens.

### 🎨 2. Developer-Focused Response Formatting
* **Markdown Parsing**: Renders titles, lists, tables, and inline highlights cleanly using `react-markdown`.
* **Prism Code Highlighting**: Beautiful code blocks with line numbering styled using the `darcula` theme.
* **Instant Clipboard Copy**: Double-action copy button with visual state changes for easy snippet extraction.

### 🛠️ 3. Fluid & Responsive UI/UX
* **Auto-Expanding Input**: Textarea dynamically expands according to typing height (60px to 200px limit).
* **Keyboard Navigation**: Send prompts instantly using `Enter` (and press `Shift+Enter` for newlines).
* **Interactive Skeleton Loading**: Pulse-based skeleton loading animations and spinner indicators.
* **Fully Responsive Grid**: Styled with Tailwind CSS v4 to look stunning on both desktop monitors and mobile devices.

---

### 🧰 Capability Matrix

| Component / Utility | Category | Primary Capability |
| :--- | :--- | :--- |
| **InputForm** | `Interactive UI` | Handles prompt typing, auto-resize height, and submit action controls |
| **ResponseDisplay** | `Data Rendering` | Renders parsed outputs, separates text and markdown blocks |
| **CodeBlock** | `Developer Tooling` | Displays formatted source code with syntax highlighting & instant copy |
| **TextBlock** | `Data Rendering` | Renders standard text and bold formatting using React Markdown component |
| **LoadingIndicator** | `UX Utilities` | Renders a skeleton pulse state when fetching AI responses |
| **Groq Utility (`groq.js`)** | `API Core` | Configures Groq SDK client instance and handles request payload structure |

---

## 🏗️ Architecture & Technology Stack

```text
react-groq-ai/
├── public/                 # Static assets (logo and web icons)
├── src/
│   ├── assets/             # Branding graphics and local assets
│   ├── components/         # Reusable UI component modules
│   │   ├── Header.jsx      # Top header brand bar
│   │   ├── InputForm.jsx   # Input fields and control buttons
│   │   ├── ResponseDisplay.jsx # Markdown and Code block coordinator
│   │   ├── LoadingIndicator.jsx # Pulse skeleton loading component
│   │   ├── LoadingSpinner.jsx # Spinner feedback loader
│   │   └── Footer.jsx      # Footer credits & signature
│   ├── utils/
│   │   └── groq.js         # Groq SDK client instantiator and request handler
│   ├── tests/              # Test configurations and test cases
│   │   ├── App.test.jsx    # Unit tests for core UI functionality
│   │   └── setup.js        # Vitest environment setup
│   ├── App.jsx             # Root layout and query pipeline manager
│   ├── App.css             # Component layout and animation stylesheet
│   ├── index.css           # Tailwind configuration entry
│   └── main.jsx            # Web entry point
├── package.json            # Scripts, workspace modules and dependencies
├── vite.config.js          # Vite build pipeline details
└── tailwind.config.js      # CSS configuration controls
```

### 💻 Stack Summary

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite 7 |
| **Styling** | Tailwind CSS v4, Vanilla CSS transitions |
| **AI Integration** | Groq SDK (Node/Browser compatibility mode) |
| **Code Highlighting** | `react-syntax-highlighter` (Prism/Darcula) |
| **Markdown Processing** | `react-markdown` |
| **Unit Testing** | Vitest, React Testing Library, Happy DOM |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.x` or higher
* **npm** or **yarn** or **pnpm** installed

### 1. Clone the Repository
```bash
git clone https://github.com/Justdhif/react-groq-ai.git
cd react-groq-ai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file at the root directory of the project:
```bash
# On Windows PowerShell
New-Item .env
```

Add your Groq API Key to the `.env` file:
```env
VITE_GROQ_API="your_groq_api_key_here"
```

### 4. Build the Production Bundle
```bash
npm run build
```

### 5. Run Local Development Server
```bash
npm run dev
```

The application will be live at:
* **Web Client**: [`http://localhost:5173`](http://localhost:5173)

---

## 🧪 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development Server** | `npm run dev` | Starts Vite local server with Hot Module Replacement (HMR) |
| **Production Build** | `npm run build` | Compiles the assets and builds optimized production files |
| **Lint Check** | `npm run lint` | Runs ESLint analysis for code quality & patterns |
| **Preview Build** | `npm run preview` | Spins up a local server to preview the built production bundle |
| **Unit Testing** | `npm run test:unit` | Launches Vitest interactive UI runner for writing/debugging unit tests |

---

## 🔒 Security & Privacy Contract

1. **Direct SDK Connection**: The application utilizes standard client-side environment variables (`import.meta.env.VITE_GROQ_API`) to initiate direct communication with the Groq API.
2. **Zero Database Logging**: Prompts, responses, and code snippets are stored purely in React state memory and are discarded upon browser tab closure.
3. **No Third-Party Analytics**: No telemetry, tracking, or tracking cookies are enabled within the web portal, assuring developer prompt confidentiality.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

**Built with ❤️ for developers by developers.**

</div>
