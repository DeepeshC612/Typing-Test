# ⌨️ Typing Test

A **modern, interactive typing test** web application built with **React**, **Vite**, and **Tailwind CSS**. Challenge yourself with **15-second**, **30-second**, or **60-second** typing tests featuring immersive paragraphs, real-time feedback, and smooth animations.

<div align="center">
  <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61dafb"/>
  <img src="https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&logoColor=yellow"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
</div>

---

## 🚀 Features

- ⏱ **Flexible Test Durations** – Choose between 15s, 30s, or 60s.
- 📖 **Engaging Paragraphs** – Type through rich, story-driven paragraphs.
- 🧠 **Real-Time Feedback** – Correct characters show green, incorrect in red, with a blue cursor indicator.
- 📊 **Accurate Results** – Displays WPM and accuracy after each test.
- 💻 **Responsive Design** – Dark-themed UI for desktop and mobile.
- ✨ **Smooth Animations** – Transitions on highlights and buttons.
- 🧩 **Modular Architecture** – Easy-to-maintain React component structure.

---

## 🛠 Tech Stack

- **React** – Component-based UI library  
- **Vite** – Lightning-fast dev server and bundler  
- **Tailwind CSS** – Utility-first CSS framework  
- **JavaScript (ES Modules)** – Modern, modular JS syntax

---

## ✅ Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher) – [Download here](https://nodejs.org/)
- **npm** – Comes bundled with Node.js
- A modern web browser (Chrome, Firefox, etc.)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/DeepeshC612/Typing-Test.git
cd typing-test

# Install dependencies
npm install
```

### 🧪 Verify Tailwind CSS

Check the following files are set up correctly:

**`tailwind.config.js`**
```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

**`src/index.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧪 Usage

### Start the development server:

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### How to Use:

1. Select a duration (15s, 30s, or 60s).
2. Click **Start Test** to begin.
3. Start typing the displayed paragraph.
4. Watch the real-time feedback and complete the test.
5. View your **WPM** and **accuracy**.
6. Click **Try Again** for a new random paragraph.

---

## 🏗️ Build for Production

```bash
npm run build
npx serve dist
```

The build output will be in the `dist/` folder.

---

## 📁 Project Structure

```
typing-test/
├── src/
│   ├── components/
│   │   └── TypingTest.jsx    # Core typing test logic
│   ├── App.jsx               # Main app component
│   ├── index.css             # Tailwind styles
│   └── main.jsx              # React entry point
├── index.html                # HTML root
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS config
├── package.json              # Scripts and dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # Documentation
```

---

## 📚 Paragraph Themes

The typing test features **five unique story-based paragraphs** (150–200 words each):

- **The Enchanted Forest** – Glowing mushrooms and hidden springs.
- **The Clockmaker’s Legacy** – Intricate clocks and a mysterious disappearance.
- **The Library of Infinite Tales** – Stories from countless worlds.
- **The Mountain’s Whisper** – Visions from a sacred mountain journey.
- **The Artisan’s Market** – A lively market of crafts and music.

> To modify or add paragraphs, edit the `paragraphs` array in:
> **`src/components/TypingTest.jsx`**

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repo
2. Create a branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push** your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a Pull Request** on GitHub

> Please include clear descriptions and run a linter if configured.

---

## 🧯 Troubleshooting

- **Dev Server Fails:** Ensure Node.js is installed and run `npm install` again.
- **Styles Not Working:** Confirm Tailwind config and CSS setup.
- **Console Errors:** Check browser developer tools for detailed logs.
- **Need Help?** Open a GitHub issue with details.

---

## 🚧 Future Enhancements

- User profiles with high score history  
- Difficulty levels (simple vs. complex paragraphs)  
- Multilingual typing support  
- Keyboard sound effects and themes  
- Global leaderboard integration  

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [`LICENSE`](./LICENSE) file for details.

---

## 📬 Contact

For questions or suggestions, [open an issue](https://github.com/DeepeshC612/Typing-Test/issues) or contact:

📧 **cholkerdeepesh@gmail.com**

---

**Happy Typing!** 🎉