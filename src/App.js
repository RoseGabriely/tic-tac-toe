import React, { useState } from "react";
import "./App.css";
import checkGameWon from "./checkGameWon";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [message, setMessage] = useState("It's player X's turn!");

  function updateBoard(index) {
    const addMove = [...board];
    addMove[index] = player;
    setBoard(addMove);
    if (checkGameWon(addMove) === true) {
      setMessage(`Player ${player} wins!`);
    } else {
      player === "X" ? setPlayer("O") : setPlayer("X");
      player === "X"
        ? setMessage("It's player O's turn!")
        : setMessage("It's player X's turn!");
    }
  }

  function handleMove(index) {
    if (board[index] !== "" && checkGameWon(board) !== true) {
      setMessage("That space is taken!");
    } else if (player === "X" && checkGameWon(board) !== true) {
      updateBoard(index);
    } else if (player === "O" && checkGameWon(board) !== true) {
      updateBoard(index);
    }
  }

  function handleRestart() {
    setBoard(Array(9).fill(""));
    setPlayer("X");
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
