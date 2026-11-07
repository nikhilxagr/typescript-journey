<a name="readme-top"></a>

<div align="center">

  <!-- Animated Header Banner -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=14,18,36,63,102,241,129,140,248&height=240&section=header&text=TypeScript%20Journey%20⚡&fontSize=52&fontAlignY=38&animation=twinkling&fontColor=ffffff&desc=The%20Complete%20Type-Safe%20Mastery%20Blueprint%20%E2%80%A2%20Compiler%20Internals%20%E2%80%A2%20React%2019%20Lab&descFontSize=17&descAlignY=64&descAlign=50" width="100%" alt="TypeScript Journey Banner" />

  <!-- Animated Dynamic Typing Headline -->
  <a href="https://github.com/nikhilxagr/typescript-journey">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&pause=1200&color=38BDF8&center=true&vCenter=true&random=false&width=720&lines=Mastering+TypeScript+from+Scratch+to+Enterprise+Patterns;Deep+Dive+into+Generics%2C+Type+Narrowing+%26+OOP;Includes+NeuralTS%3A+Futuristic+React+19+Interactive+Studio;Crafted+with+%E2%9D%A4%EF%B8%8F+by+Nikhil+Agrahari+(%40nikhilxagr)" alt="Typing SVG" />
  </a>

  <br/>

  <!-- Shields & Badges -->
  <p align="center">
    <a href="#curriculum">
      <img src="https://img.shields.io/badge/TypeScript-5.8%20%7C%207.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="#neuralts-studio">
      <img src="https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React 19" />
    </a>
    <a href="#neuralts-studio">
      <img src="https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <img src="https://img.shields.io/badge/Type%20Safety-Strict%20100%25-22C55E?style=for-the-badge&logo=shield&logoColor=white" alt="Strict Mode" />
    <a href="architect.MD">
      <img src="https://img.shields.io/badge/Compiler-Architecture%20Inside-A855F7?style=for-the-badge&logo=diagram-next&logoColor=white" alt="Architecture" />
    </a>
    <a href="https://github.com/nikhilxagr/typescript-journey/stargazers">
      <img src="https://img.shields.io/github/stars/nikhilxagr/typescript-journey?style=for-the-badge&color=F59E0B&logo=github" alt="Stars" />
    </a>
  </p>

  <!-- Navigation Pill Bar -->
  <p align="center">
    <a href="#overview"><b>🔭 Overview</b></a> •
    <a href="#architecture"><b>🧩 Architecture</b></a> •
    <a href="#curriculum"><b>📚 Curriculum</b></a> •
    <a href="#neuralts-studio"><b>⚡ NeuralTS Studio</b></a> •
    <a href="#tech-stack"><b>🛠️ Tech Stack</b></a> •
    <a href="#quick-start"><b>🚀 Quick Start</b></a> •
    <a href="#structure"><b>📂 Structure</b></a> •
    <a href="#author"><b>👨‍💻 Author</b></a>
  </p>

  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="900" alt="Animated Divider" />

</div>

---

<a name="overview"></a>
## 🔭 Overview

Welcome to **TypeScript Journey** — a comprehensive, hands-on repository engineered to bridge the gap between beginner syntax and enterprise-grade TypeScript engineering.

Unlike typical syntax cheat-sheets, this project is designed as a **dual-engine learning ecosystem**:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        TYPESCRIPT JOURNEY ECOSYSTEM                         │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ 🧠 TRACK 1: CORE TYPE-SYSTEM ENGINE  │ ⚡ TRACK 2: NEURALTS REACT 19 STUDIO │
│                                      │                                      │
│ • Primitives, Enums & Tuples         │ • AI Copilot Streaming Interface     │
│ • Object Schemas & Type Aliases      │ • Strongly-Typed UI Props & States   │
│ • Function Signatures & Callbacks    │ • Generic Custom Hooks (useFetch<T>) │
│ • Polymorphic Generics & Constraints │ • Controlled Form Validation & Refs  │
│ • Type Guards & Narrowing            │ • Real-time JSON Telemetry Inspector │
│ • OOP, Inheritance & Access Control  │ • Neon Cyber Obsidian Aesthetic      │
│ • Asynchronous Web Requests (Axios)  │ • Zero ESLint / Oxlint Warnings      │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

> [!NOTE]
> All core scripts are written with TypeScript's **`strict: true`** flag enabled, ensuring true type guarantees, zero unchecked `any` leakages, and production-ready mental models.

---

<a name="architecture"></a>
## 🧩 Compiler Architecture

TypeScript is not just a linter — it is a sophisticated **multi-stage static analysis pipeline**. Here is how source `.ts` code transforms into optimized runtime JavaScript:

```mermaid
flowchart LR
    A["Developer Source (.ts)"] --> B["Lexer & Scanner"]
    B --> C["Parser & AST Generation"]
    C --> D["Binder (Symbol Tables)"]
    D --> E["Type Checker Engine"]
    E --> F{"Type Checked?"}
    F -- "No Errors" --> G["Emitter (AST to JS)"]
    F -- "Diagnostics" --> H["IDE / Console Errors"]
    G --> I["Clean JavaScript (.js)"]
    I --> J["V8 Engine / Node / Browser"]
    
    style A fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#fff
    style E fill:#312e81,stroke:#a5b4fc,stroke-width:2px,color:#fff
    style G fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#fff
    style J fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#fff
```

### ⚡ Key Architectural Concepts Documented

| Stage | Process | Responsibilities |
| :--- | :--- | :--- |
| **Stage 1: Lexing & Parsing** | Text ➔ AST | Tokenizes source code and constructs the **Abstract Syntax Tree** |
| **Stage 2: Binding** | Identifiers ➔ Symbols | Links variable declarations to scopes via internal Symbol Tables |
| **Stage 3: Type Checking** | Structural Equivalence | Verifies type rules, generic constraints, and reports diagnostics |
| **Stage 4: Emitting** | AST ➔ `.js` + `.d.ts` | Erases all type annotations and outputs pure ECMAScript code |
| **Stage 5: Execution** | JS ➔ Machine Code | Run by Node.js or browser V8 engines (Types do not run at runtime) |

📖 *Read the complete architectural breakdown in [architect.MD](architect.MD).*

---

<a name="curriculum"></a>
## 📚 Curriculum & Roadmap

Each module in [`src/`](src/) is focused on an isolated concept with code examples, common edge cases, and best practices:

| # | Topic | Key Concepts Covered | Level | Source File |
| :-: | :--- | :--- | :-: | :-: |
| **01** | **Primitives & Annotations** | `string`, `number`, `boolean`, Type Inference, Explicit annotations | 🟢 Beginner | [`typesinTS.ts`](src/typesinTS.ts) |
| **02** | **Unions & Any** | Union types (`string \| number`), literal types, perils of `any` | 🟢 Beginner | [`unionAndany.ts`](src/unionAndany.ts) |
| **03** | **Type Definitions** | Type aliases (`type`), custom scalar definitions, reusable schemas | 🟢 Beginner | [`typeDefinition.ts`](src/typeDefinition.ts) |
| **04** | **Arrays & Enums** | `Array<T>`, `T[]`, numeric enums, tuple shapes, readonly arrays | 🟢 Beginner | [`ArrayEnum.ts`](src/ArrayEnum.ts) |
| **05** | **String Enums** | Explicit string representations, domain status management (`Pending \| Approved`) | 🟡 Intermediate | [`ArrEnum2.ts`](src/ArrEnum2.ts) |
| **06** | **Objects & Shape** | Structural typing, nested objects, optional fields (`?`), excess property checks | 🟡 Intermediate | [`objectTs.ts`](src/objectTs.ts) |
| **07** | **Function Signatures** | Typed parameters, return types, optional args, default params, rest args | 🟡 Intermediate | [`fn.ts`](src/fn.ts) & [`functionTs.ts`](src/functionTs.ts) |
| **08** | **Interfaces & Extending** | `interface` declaration, merging, extending interfaces, Types vs Interfaces | 🟡 Intermediate | [`interfaceTs.ts`](src/interfaceTs.ts) & [`interface2nd.ts`](src/interface2nd.ts) |
| **09** | **Generics `<T>`** | Type parameters, generic constraints (`T extends object`), wrapper utilities | 🟣 Advanced | [`generics.ts`](src/generics.ts) |
| **10** | **Type Narrowing** | Type guards, `typeof`, `instanceof`, equality narrowing, exhaustive checks | 🟣 Advanced | [`typeNarrowing.ts`](src/typeNarrowing.ts) |
| **11** | **Advanced Types** | Type assertions (`as`), `unknown` safe casting, `never` return type | 🟣 Advanced | [`moreTypes.ts`](src/moreTypes.ts) |
| **12** | **Object-Oriented TS** | Classes, constructors, `public` / `private` / `protected`, getters & setters | 🟣 Advanced | [`OOP.ts`](src/OOP.ts) & [`oopExample.ts`](src/oopExample.ts) |
| **13** | **Async API Typing** | Axios network requests, generic response mapping (`AxiosResponse<Todo>`) | 🟣 Advanced | [`webReq.ts`](src/webReq.ts) |

---

<a name="neuralts-studio"></a>
## ⚡ NeuralTS Interactive Studio

Inside the [`reactts/`](reactts/) directory is a full-fledged **React 19 + TypeScript + Vite** application built with modern dark glassmorphism styling and interactive TypeScript laboratories:

```
  ┌────────────────────────────────────────────────────────────────────────┐
  │  🤖 NEURALTS STUDIO v3.4             [● KERNEL ACTIVE]  [TS STRICT]    │
  ├────────────────────────────────────────────────────────────────────────┤
  │  [🤖 AI Studio] [☕ Chai Matrix] [📝 Order Terminal] [🔢 Counter] [🧪 useFetch] │
  ├────────────────────────────────────────────────────────────────────────┤
  │                                                                        │
  │  ⚡ Interactive AI Model Switcher  ──► DeepSeek R1, Claude 3.7, GPT-4o │
  │  ⚡ Real-Time Token Streamer       ──► Simulated typing cursor (▋)     │
  │  ⚡ Type Guard Synthesizer         ──► Generates runtime predicates    │
  │  ⚡ Generic Custom Hook            ──► useFetch<T> with AbortController│
  │  ⚡ Reactive Order Terminal        ──► Live JSON Payload stream        │
  │                                                                        │
  └────────────────────────────────────────────────────────────────────────┘
```

### 🌟 Interactive Studio Highlights

1. **AI Neural Copilot Studio ([`AiStudio.tsx`](reactts/src/components/AiStudio.tsx))**
   - Live simulated inference streaming with token counters and confidence telemetry.
   - Generates production-grade TypeScript Type Predicates (`arg is ValidatedPayload`).
   - Hyperparameter sliders for Temperature and Top-P sampling.

2. **Chai Matrix Catalog ([`ChaiList.tsx`](reactts/src/components/ChaiList.tsx) & [`ChaiCard.tsx`](reactts/src/components/ChaiCard.tsx))**
   - Demonstrates reactive typed search and filter predicates over `ChaiItem[]`.
   - Real-time derived analytics (average prices, item counts) using typed `useMemo`.

3. **Command Order Terminal ([`OrderForm.tsx`](reactts/src/components/OrderForm.tsx))**
   - Form handling with typed object states (`OrderFormState`), union select options, and `useRef<HTMLInputElement>`.
   - Live JSON inspection pane rendering the formatted payload in real time.

4. **Quantum Flux Counter ([`Counter.tsx`](reactts/src/components/Counter.tsx))**
   - `useState<number>` with union step sizes (`type StepSize = 1 | 2 | 5 | 10 | 25 | 50`).
   - Digital glowing neon HUD with dynamic progress gauge calculation.

5. **Type-Safe Generic Custom Hook ([`useFetch.ts`](reactts/src/Hooks/useFetch.ts))**
   - Reusable hook signature: `useFetch<T>(url: string, options)`
   - Features automatic `AbortController` cleanup and discriminated status union (`idle | loading | success | error`).

```typescript
// Example: Generic useFetch<T> implementation
const { data, loading, error, refetch } = useFetch<SimulatedApiResponse>('/api/telemetry', {
  immediate: true,
  transform: (raw) => raw as SimulatedApiResponse
});

// data is automatically typed as SimulatedApiResponse | null with IDE autocompletion!
console.log(data?.activePipelines);
```

---

<a name="tech-stack"></a>
## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
| :--- | :--- |
| **Languages** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Frontend Framework** | ![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Runtime & Tooling** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) ![ts-node](https://img.shields.io/badge/ts--node-3178C6?style=flat-square&logo=tsnode&logoColor=white) |
| **Styling & Design** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![Google Fonts](https://img.shields.io/badge/Plus_Jakarta_Sans-4285F4?style=flat-square&logo=google&logoColor=white) |
| **Linting & Quality** | ![Oxlint](https://img.shields.io/badge/Oxlint-Fast_Rust_Linter-EA580C?style=flat-square) ![Strict TS](https://img.shields.io/badge/Strict_TS-Enabled-22C55E?style=flat-square) |

</div>

---

<a name="quick-start"></a>
## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nikhilxagr/typescript-journey.git
cd typescript-journey
```

### 2️⃣ Running Node.js TypeScript Lessons

Install backend dependencies and run any script directly using `ts-node`:

```bash
# Install root dependencies
npm install

# Run the entry script
npm run dev

# Or run any individual topic file directly
npx ts-node src/generics.ts
npx ts-node src/typeNarrowing.ts
npx ts-node src/OOP.ts
```

### 3️⃣ Running the NeuralTS React 19 Studio

```bash
# Navigate to the React Studio directory
cd reactts

# Install frontend dependencies
npm install

# Start the Vite development server
npm run dev
```

Open your browser at `http://localhost:5173` to explore the interactive studio!

```bash
# To run linter and production build
npm run lint
npm run build
```

---

<a name="structure"></a>
## 📂 Project Structure

```bash
typescript-journey/
├── 📁 src/                     # Core TypeScript Lessons & Deep Dives
│   ├── typesinTS.ts            # Primitives & Type Annotations
│   ├── unionAndany.ts          # Union Types & Any Safety
│   ├── typeDefinition.ts       # Type Aliases & Custom Types
│   ├── ArrayEnum.ts            # Arrays & Number Enums
│   ├── ArrEnum2.ts             # String Enums
│   ├── objectTs.ts             # Object Typing & Interfaces
│   ├── fn.ts / functionTs.ts   # Function Signatures & Defaults
│   ├── interfaceTs.ts          # Interfaces & Extending
│   ├── interface2nd.ts         # Interface Generics
│   ├── generics.ts             # Generic Functions & Constraints
│   ├── typeNarrowing.ts        # Type Guards & Predicates
│   ├── moreTypes.ts            # Assertions, Unknown & Never
│   ├── OOP.ts / oopExample.ts  # Classes, Modifiers & Inheritance
│   └── webReq.ts               # Axios HTTP Network Typing
│
├── 📁 reactts/                 # Interactive React 19 + TypeScript Studio
│   ├── 📁 src/
│   │   ├── 📁 components/      # Type-Safe Cyberpunk UI Components
│   │   │   ├── AiStudio.tsx    # Neural Copilot Streaming Simulator
│   │   │   ├── ChaiCard.tsx    # Typed Single Item Card
│   │   │   ├── ChaiList.tsx    # Reactive Filtered List
│   │   │   ├── Counter.tsx     # Quantum Flux Counter with Generics
│   │   │   ├── OrderForm.tsx   # Controlled Form & Live JSON Terminal
│   │   │   └── Card.tsx        # Typed Props & Action Callbacks
│   │   ├── 📁 Hooks/
│   │   │   └── useFetch.ts     # Generic Custom Data Fetching Hook
│   │   ├── App.tsx             # Tab Navigation & Toast Dispatcher
│   │   ├── App.css             # Obsidian Glow Design System
│   │   └── index.css           # Typography & Global Reset
│   ├── package.json
│   └── vite.config.ts
│
├── architect.MD                # In-depth TypeScript Architecture Document
├── tsconfig.json               # Root TypeScript Compiler Configuration
├── package.json                # Root Dependencies & Scripts
└── README.md                   # Comprehensive Project Documentation
```

---

<a name="author"></a>
## 👨‍💻 Author & Portfolio

<div align="center">

  <img src="https://github.com/nikhilxagr.png" width="130" style="border-radius: 50%; border: 3px solid #818cf8;" alt="Nikhil Agrahari" />

  ### **Nikhil Agrahari**
  *Full-Stack Engineer & TypeScript Craftsman*

  <p align="center">
    <a href="https://github.com/nikhilxagr">
      <img src="https://img.shields.io/badge/GitHub-nikhilxagr-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="mailto:nikhilgithub2005@gmail.com">
      <img src="https://img.shields.io/badge/Email-Get%20in%20Touch-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
    <a href="https://linkedin.com/in/nikhilxagr">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>
  </p>

  <!-- GitHub Live Stats Cards -->
  <p align="center">
    <img src="https://github-readme-stats.vercel.app/api?username=nikhilxagr&show_icons=true&theme=tokyonight&hide_border=true&bg_color=08090e&title_color=818cf8&text_color=94a3b8&icon_color=38bdf8" height="150" alt="GitHub Stats" />
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=nikhilxagr&theme=tokyonight&hide_border=true&background=08090e&stroke=818cf8&ring=818cf8&fire=38bdf8&currStreakLabel=38bdf8" height="150" alt="Streak Stats" />
  </p>

</div>

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are always welcome!

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingTypeFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingTypeFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingTypeFeature`)
5. **Open** a Pull Request

---

## 📄 License

This repository is licensed under the [ISC License](package.json). Feel free to use this code for personal projects, learning, and reference.

---

<div align="center">

  **If you found this TypeScript Journey helpful, please consider giving it a ⭐!**

  <br/>

  <a href="#readme-top">
    <img src="https://img.shields.io/badge/Back%20To%20Top-▲-818CF8?style=for-the-badge&logoColor=white" alt="Back to top" />
  </a>

  <br/><br/>

  <!-- Animated Footer Wave -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=14,18,36,63,102,241,129,140,248&height=120&section=footer" width="100%" alt="Footer Banner" />

</div>
