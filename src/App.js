import { useState, useEffect } from "react";
import './App.css'
function App() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Don't count the days, make the days count. - Muhammad Ali",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
  ];
  const [text, setText] = useState("Empty");
  const [textWritten, setWrittenText] = useState("");
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const handleChange = (e) => {
    setWrittenText(e.target.value);
    let textSplits = text.split(" ");
    let textSplitsWritten = textWritten.split(" ");
    if (!started) {
      setStartTime(Date.now());
      setStarted(true);
    } else {
      let currTime = Date.now();
      let diff = currTime - startTime;
      let error = 0;
      setSpeed(Math.floor((textSplitsWritten.length / diff) * 60000));
      let equals = [];
      let tot = 0;
      console.log(textSplitsWritten.length);
      console.log(textSplits.length);
      for (
        let i = 0;
        i < textSplitsWritten.length && i < textSplits.length;
        i++
      ) {
        tot++;
        if (textSplitsWritten[i] === textSplits[i]) {
          equals.push(1);
        } else {
          equals.push(0);
          error++;
        }
      }
      setAccuracy(Math.floor((1 - error / textSplits.length) * 100));
    }
  };
  useEffect(() => {
    setText(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="container">
      <div>
        <div className = "subDiv">{text}</div>
        <div className = "subDiv">
          <textarea
            value={textWritten}
            onChange={handleChange}
            rows="4"
            cols="50"
          />
        </div>
        <div className = "subDiv">Speed: {speed} WPM</div>
        <div className = "subDiv">Accuracy: {accuracy} %</div>
      </div>
    </div>
  );
}

export default App;
