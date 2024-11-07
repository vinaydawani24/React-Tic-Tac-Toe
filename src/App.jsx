import React, { useState, useEffect } from "react";
import Block from "./components/Block";

const App = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  // Check for a win whenever `state` changes
  useEffect(() => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      if (
        state[combination[0]] &&
        state[combination[0]] === state[combination[1]] &&
        state[combination[1]] === state[combination[2]]
      ) {
        setWinner(state[combination[0]]);
        return;
      }
    }
  }, [state]); // Run this effect whenever `state` changes

  // Trigger the alert when `winner` is updated
  useEffect(() => {
    if (winner) {
      alert(`Player ${winner} wins!`);
    }
  }, [winner]); // Only run when `winner` changes

  const handleClick = (index) => {
    if (state[index] !== null || winner) return; // Prevent clicking on filled or winning spots

    const stateCopy = [...state];
    stateCopy[index] = currentTurn;
    setState(stateCopy);
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  return (
    <div className="Board w-full h-screen flex flex-col items-center justify-center">
      <div className="Row flex gap-4">
        <Block onClick={() => handleClick(0)} value={state[0]} />
        <Block onClick={() => handleClick(1)} value={state[1]} />
        <Block onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="Row flex gap-4 mt-5">
        <Block onClick={() => handleClick(3)} value={state[3]} />
        <Block onClick={() => handleClick(4)} value={state[4]} />
        <Block onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="Row flex gap-4 mt-5">
        <Block onClick={() => handleClick(6)} value={state[6]} />
        <Block onClick={() => handleClick(7)} value={state[7]} />
        <Block onClick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
  );
};

export default App;