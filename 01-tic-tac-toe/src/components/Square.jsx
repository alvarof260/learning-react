import { clsx } from "clsx";
import { TURNS } from "../constants";

export const Square = ({ children, updateBoard, index, winnerComb }) => {
  const classes = clsx(
    "text-center text-whiteCustom font-bold text-4xl border-2 border-mint border-solid w-24 h-24 rounded-lg flex justify-center items-center outline-none focus:ring-4 ring-mint",
    {
      "cursor-not-allowed": children,
      "bg-mint": children === TURNS.X,
      "bg-teal": children === TURNS.O,
      "bg-yellow-400 border-yellow-400": winnerComb?.includes(index),
    }
  );
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      onClick={handleClick}
      className={
        "transition duration-300 ease-in-out transform hover:scale-110" +
        classes
      }
    >
      {children}
    </div>
  );
};
