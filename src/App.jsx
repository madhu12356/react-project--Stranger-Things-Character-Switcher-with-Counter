import { useState } from "react";
import "./App.css";

function App() {
  const characters = [
    "Vijaya",
    "Lavanya",
    "Gowthami",
    "Lakshmi",
    "Kaashvi",
    "Madhu",
    "Aruna"
  ];

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const nextCharacter = () => {
    setIndex(prev =>
      prev === characters.length - 1 ? 0 : prev + 1
    );
  };

  const prevCharacter = () => {
    setIndex(prev =>
      prev === 0 ? characters.length - 1 : prev - 1
    );
  };

  return (
    <div className="page">
      <h1 className="title"> Stranger Things</h1>

      <div className="card">
        <h2 key={index} className="name">
          {characters[index]}
        </h2>

        <div className="buttons">
          <button className="main-btn" onClick={prevCharacter}>
            Previous
          </button>

          <button className="main-btn" onClick={nextCharacter}>
            Next
          </button>
        </div>

        <div className="counter">
          <h3>Counter: {count}</h3>

          <div className="buttons">
            <button
              className="counter-btn"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>

            <button
              className="counter-btn"
              onClick={() => setCount(count - 1)}
            >
              −
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
