Typing Test
A modern, interactive typing test web application built with React, Vite, and Tailwind CSS. Challenge yourself with 15-second, 30-second, or 60-second typing tests, featuring immersive paragraphs, real-time feedback, and smooth animations. The application provides accurate Words Per Minute (WPM) and accuracy metrics, wrapped in a visually appealing, responsive interface.
Features

Flexible Test Durations: Choose 15s, 30s, or 60s to suit your preference.
Engaging Paragraphs: Type through five unique, descriptive paragraphs (150–200 words each), including tales of enchanted forests, clockmaker’s shops, and more.
Real-Time Feedback: Correct characters highlight in green, incorrect in red, with a cursor indicator for the current position.
Accurate Results: Displays WPM and accuracy percentage after each test.
Responsive Design: Sleek, dark-themed UI optimized for desktop and mobile using Tailwind CSS.
Smooth Animations: Subtle transitions for text highlights and button interactions.
Modular Architecture: Built with React components for easy maintenance and scalability.

Tech Stack

React: For building a component-based user interface.
Vite: For fast development and optimized production builds.
Tailwind CSS: For utility-first, responsive styling.
JavaScript (ES Modules): For modern, dynamic functionality.

Prerequisites
Before running the project, ensure you have:

Node.js: Version 16 or higher (download).
npm: Included with Node.js for package management.
A modern web browser (e.g., Chrome, Firefox).

Installation

Clone the Repository:
git clone https://github.com/DeepeshC612/Typing-Test.git
cd typing-test


Install Dependencies:
npm install


Verify Tailwind CSS Setup:The project includes Tailwind CSS. Ensure the following:

tailwind.config.js:/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};


src/index.css:@tailwind base;
@tailwind components;
@tailwind utilities;





Usage

Start the Development Server:
npm run dev

Open the URL provided (e.g., http://localhost:5173) in your browser.

Run the Typing Test:

Select a duration (15s, 30s, or 60s) using the buttons.
Click "Start Test" or a duration button to begin.
Type the displayed paragraph in the textarea.
Observe real-time feedback: green for correct characters, red for incorrect, and a blue cursor for your position.
When the timer ends, view your WPM and accuracy.
Click "Try Again" to start a new test with a random paragraph.


Build for Production:To create a production-ready build:
npm run build

The output will be in the dist folder. Serve it using a static server:
npx serve dist



Project Structure
``
typing-test/
├── src/
│   ├── components/
│   │   └── TypingTest.jsx    # Core typing test component
│   ├── App.jsx               # Main app component
│   ├── index.css             # Tailwind CSS styles
│   └── main.jsx              # React entry point
├── index.html                # HTML entry point
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
``

Paragraphs
The typing test features five unique paragraphs (150–200 words each) to keep the experience engaging:
``
The Enchanted Forest: A mystical woodland with glowing mushrooms and hidden springs.
The Clockmaker’s Legacy: A tale of intricate clocks and a mysterious disappearance.
The Library of Infinite Tales: A vast library filled with stories from countless worlds.
The Mountain’s Whisper: A journey up a sacred mountain with visions of the future.
The Artisan’s Market: A vibrant market bustling with crafts and music.
``

To modify or add paragraphs, update the paragraphs array in src/components/TypingTest.jsx.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
``
Create a feature branch:git checkout -b feature/your-feature
``
``
Commit your changes:git commit -m "Add your feature"
``
``
Push to the branch:git push origin feature/your-feature
``

Open a pull request on GitHub.

Please include clear descriptions of your changes and ensure code is linted (if ESLint is configured).
Troubleshooting

Development Server Fails: Ensure Node.js is installed and run npm install again.
Styling Not Applied: Verify tailwind.config.js and src/index.css are correctly set up.
Runtime Errors: Check the browser console (F12 > Console) for details. Common issues include missing dependencies or syntax errors in TypingTest.jsx.
Issues: Open a GitHub issue with error details for assistance.

Future Enhancements
``
Add user profiles to save high scores.
Implement difficulty levels (e.g., simple vs. complex paragraphs).
Support multilingual paragraphs.
Add keyboard sound effects or visual themes.
Integrate a leaderboard for competitive typing.
``
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or suggestions, open an issue on the GitHub repository or contact [cholkerdeepesh@gmail.com].

Happy typing!
