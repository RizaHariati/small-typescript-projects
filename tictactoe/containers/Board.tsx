import React, { useEffect, useState } from "react";
import Square from "../components/Square";

const Board = () => {
  type Player = "X" | "O" | null | "BOTH";
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);
  const handleReset = () => {
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    setSquares(Array(9).fill(null));
    setWinner(null);
  };

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      } else {
        return val;
      }
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const calculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  useEffect(() => {
    const w = calculateWinner(squares);

    if (w) {
      setWinner(w);
    }
    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  return (
    <div className="container">
      {!winner && <p>Hey {currentPlayer}, it's your turn now</p>}
      {winner && <p>The winner is {winner}</p>}
      <div className="board-container">
        {Array(9)
          .fill(null)
          .map((_, index) => {
            return (
              <Square
                key={index}
                winner={winner}
                onClick={() => setSquareValue(index)}
                value={squares[index]}
              />
            );
          })}
      </div>
      <button onClick={() => handleReset()}>reset</button>
    </div>
  );
};

export default Board;
