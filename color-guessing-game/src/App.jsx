import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    generateColors();
  }, []);

  const backgroundColor = {
    width: "300px",
    height: "200px",
    background: color,
  };

  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const generateColors = () => {
    const actualColor = randomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, randomColor(), randomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  };

  const handleClickedAnswer = (answer) => {
    if (answer === color) {
      setResult("correct");
      generateColors();
    } else {
      setResult("wrong");
    }
  };

  return (
    <>
      <div style={backgroundColor}></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {answers.map((answer) => (
          <button onClick={() => handleClickedAnswer(answer)} key={answer}>
            {answer.toUpperCase()}
          </button>
        ))}
      </div>
      <div
        style={{
          height: "50px",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        {result === "wrong" && <div className="wrong">Wrong Answer!</div>}
        {result === "correct" && <div className="correct">Correct!</div>}
      </div>
    </>
  );
}

export default App;
