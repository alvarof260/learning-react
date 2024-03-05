import { WINNER_COMBINATIONS } from "../constants";

const getWinner = (boardToCheck) => {
  for (const comb of WINNER_COMBINATIONS) {
    const [a, b, c] = comb;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return { winner: boardToCheck[a], comb };
    }
  }
  return null;
};

const isBoardFull = (boardToCheck) => {
  return boardToCheck.every((cell) => cell !== null);
};

const saveToLocalStorage = ({board, turn}) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
}

const deleteFromLocalStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
}

export { getWinner ,isBoardFull, saveToLocalStorage, deleteFromLocalStorage}
