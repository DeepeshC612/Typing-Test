import { useState, useEffect } from 'react';
import { BsArrowRepeat } from "react-icons/bs";
import { paragraphs } from '../data/paragraphs';

const TypingTest = () => {
  const [duration, setDuration] = useState(60);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [wpm, setWPM] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [completed, setCompleted] = useState(false);

  const getRandomParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
  };

  const startTest = () => {
    setText(getRandomParagraph());
    setInput('');
    setTimeLeft(duration);
    setIsRunning(true);
    setCompleted(false);
    setWPM(0);
    setAccuracy(0);
  };

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft <= 0 && isRunning) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const endTest = () => {
    setIsRunning(false);
    setCompleted(true);
    calculateResults();
  };

  const calculateResults = () => {
    const wordsTyped = input.trim() ? input.trim().split(/\s+/).length : 0;
    const minutes = duration / 60;
    const calculatedWPM = Math.round(wordsTyped / minutes);
    let correctChars = 0;
    for (let i = 0; i < Math.min(input.length, text.length); i++) {
      if (input[i] === text[i]) correctChars++;
    }
    const calculatedAccuracy = text.length > 0 ? Math.round((correctChars / text.length) * 100) : 0;
    setWPM(calculatedWPM);
    setAccuracy(calculatedAccuracy);
  };

  const handleInputChange = (e) => {
    if (!isRunning) return;
    setInput(e.target.value);
  };

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = 'text-gray-900 transition-all duration-200 font-semibold';
      if (index < input.length) {
        className += input[index] === char ? ' text-white' : ' text-red-300';
      } else if (index === input.length) {
        className += ' border-b-2 border-blue-300';
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="max-w-2xl max-h-2xl w-full p-6 bg-[#323437] rounded-2xl shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-4 text-white">Start typing</h1>
      {!isRunning ? <div className="flex justify-center space-x-4 mb-4">
        {[15, 30, 60].map((time) => (
          <button
            key={time}
            onClick={() => {
              setDuration(time);
            //   if (!isRunning) startTest();
            }}
            className={`text-white border-b-2 border-b-yellow-500 cursor-pointer px-2 py-1 rounded-lg ${
              duration === time ? 'bg-yellow-600' : 'bg-none'
            } hover:bg-yellow-600 transition-colors`}
            disabled={isRunning}
          >
            {time}s
          </button>
        ))}
      </div> :  null}
      {!isRunning && !completed && (
        <button
          onClick={startTest}
          className="text-white cursor-pointer w-full py-4 bg-yellow-600 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Start Test
        </button>
      )}
      {isRunning && (
        <div className="text-center mb-4">
          <p className="text-xl text-white">Time Left: {timeLeft}s</p>
          <div className="mt-4 max-h-2xl overflow-auto p-4 bg-gray-500 rounded-lg text-left font-mono text-lg">
            {renderText()}
          </div>
          <textarea
            value={input}
            onChange={handleInputChange}
            className="text-white w-full mt-4 p-2 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="4"
            autoFocus
          />
        </div>
      )}
      {completed && (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">Results</h2>
          <p className="text-lg text-white">WPM: {wpm}</p>
          <p className="text-lg text-white">Accuracy: {accuracy}%</p>
          <button
            onClick={startTest}
            className="text-white mt-4 py-2 px-4 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <BsArrowRepeat size={32} />
            </button>
        </div>
      )}
    </div>
  );
};

export default TypingTest;
