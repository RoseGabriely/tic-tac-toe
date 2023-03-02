import React, { useState } from "react";
import "./App.css";
import checkGameWon from "./checkGameWon";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("Player 1");

  function handleMove(index) {
    if (player === "Player 1") {
      const addMove = [...board];
      addMove[index] = "X";
      setBoard(addMove);
      checkGameWon(addMove)
        ? setPlayer("Player 1 wins!")
        : setPlayer("Player 2");
    } else if (player === "Player 2") {
      const addMove = [...board];
      addMove[index] = "O";
      setBoard(addMove);
      checkGameWon(addMove)
        ? setPlayer("Player 2 wins!")
        : setPlayer("Player 1");
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(""));
    setPlayer("Player 1");
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <h2>{checkGameWon(board) ? `${player}` : `It's ${player}'s turn!`}</h2>
      <div className="Board">
        {board.map((buttonText, index) => (
          <button
            className="Tile"
            key={index}
            onClick={() => handleMove(index)}
          >
            {buttonText}
          </button>
        ))}
      </div>
      <button className="Restart" onClick={handleRestart}>
        {" "}
        Restart?{" "}
      </button>
    </div>
  );
}

export default App;
