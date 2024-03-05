import { Square } from "./Square";

export const Board = ({ board, updateBoard, winnerComb }) => {
  return (
    <article className="grid grid-cols-3 gap-3 w-96 h-96 place-content-center place-items-center">
      {board.map((mark, index) => (
        <Square
          key={index}
          index={index}
          updateBoard={updateBoard}
          winnerComb={winnerComb}
        >
          {mark}
        </Square>
      ))}
    </article>
  );
};
