import { useState } from "react";

import { Board } from "./components/Board";
import { TurnMessage } from "./components/TurnMessage";
import { WinnerModal } from "./components/WinnerModal";
import {
  getWinner,
  isBoardFull,
  saveToLocalStorage,
  deleteFromLocalStorage,
} from "./utils/board";
import { TURNS } from "./constants";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem("board");
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem("turn");
    return turnFromLocalStorage ? turnFromLocalStorage : TURNS.X;
  });
  const [winner, setWinner] = useState(null);
  const [winnerComb, setWinnerComb] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveToLocalStorage({ board: newBoard, turn: newTurn });

    const newWinner = getWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner.winner);
      setWinnerComb(newWinner.comb);
    } else if (isBoardFull(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setWinnerComb(null);
    deleteFromLocalStorage();
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="text-whiteCustom text-5xl font-bold mb-10">
          Tic tac toe
        </h1>
        <Board
          board={board}
          updateBoard={updateBoard}
          winnerComb={winnerComb}
        />
        <article className="text-center">
          <TurnMessage turn={turn} />
        </article>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </section>
    </>
  );
}

export default App;
