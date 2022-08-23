import React, { useState } from "react";
import Square from "./Square";
import "../styles/GameCircle.css";

function GameCircle() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [setValue] = useState("");
  const [winner, setWinner] = useState(Array(9).fill("clear"));
  winnerChecker(boxes);
  const handleClick = (index) => {
    if (winnerChecker(boxes)) {
      const newBoxes = Array(9).fill("");
      const newWinner = Array(9).fill("clear");
      setWinner([...newWinner]);
      setBoxes([...newBoxes]);
      return;
    }
    if (boxes[index] === null) {
      boxes[index] = "X";
      winner[index] = "redBox";
    } else if (boxes[index] === "X") {
      boxes[index] = "O";
      winner[index] = "blueBox";
    } else if (boxes[index] === "O") {
      boxes[index] = "";
      winner[index] = "clear";
    } else if (boxes[index] === "") {
      boxes[index] = "X";
      winner[index] = "redBox";
    } else {
      return null;
    }

    setWinner([...winner]);
    setBoxes([...boxes]);
    setValue(boxes[index]);
  };

  function winnerChecker(boxes) {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winners.length; i++) {
      const [a, b, c] = winners[i];

      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        winner[a] =
          boxes[a] === "X"
            ? "winnerRed"
            : boxes[a] === "O"
            ? "winnerBlue"
            : "clear";
        winner[b] =
          boxes[b] === "X"
            ? "winnerRed"
            : boxes[b] === "O"
            ? "winnerBlue"
            : "clear";
        winner[c] =
          boxes[c] === "X"
            ? "winnerRed"
            : boxes[c] === "O"
            ? "winnerBlue"
            : "clear";
        return boxes[a];
      }
    }
    return null;
  }

  return (
    <div className="gameContainer">
      <div>
        <Square
          className={winner[0]}
          value={boxes[0]}
          onClick={() => handleClick(0)}
        />
        <Square
          className={winner[1]}
          value={boxes[1]}
          onClick={() => handleClick(1)}
        />
        <Square
          className={winner[2]}
          value={boxes[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div>
        <Square
          className={winner[3]}
          value={boxes[3]}
          onClick={() => handleClick(3)}
        />
        <Square
          className={winner[4]}
          value={boxes[4]}
          onClick={() => handleClick(4)}
        />
        <Square
          className={winner[5]}
          value={boxes[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div>
        <Square
          className={winner[6]}
          value={boxes[6]}
          onClick={() => handleClick(6)}
        />
        <Square
          className={winner[7]}
          value={boxes[7]}
          onClick={() => handleClick(7)}
        />
        <Square
          className={winner[8]}
          value={boxes[8]}
          onClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
}
export default GameCircle;
