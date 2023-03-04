import React, { useState } from "react";
import "./App.css";
import checkGameWon from "./checkGameWon";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("Player X");
  const [message, setMessage] = useState("It's player X's turn!");

  function handleMove(index) {
    if (board[index] !== "") {
      setMessage("That space is taken!");
    } else if (player === "Player X") {
      const addMove = [...board];
      addMove[index] = "X";
      setBoard(addMove);
      if (checkGameWon(addMove) === true) {
        setMessage("Player X wins!");
      } else {
        setPlayer("Player O");
        setMessage("It's player O's turn!");
      }
    } else if (player === "Player O") {
      const addMove = [...board];
      addMove[index] = "O";
      setBoard(addMove);
      if (checkGameWon(addMove) === true) {
        setMessage("Player O wins!");
      } else {
        setPlayer("Player X");
        setMessage("It's player X's turn!");
      }
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(""));
    setPlayer("Player X");
    setMessage("It's player X's turn!");
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <h2>{message}</h2>
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
