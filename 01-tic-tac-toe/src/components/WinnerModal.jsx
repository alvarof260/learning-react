export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;
  const winnerMessage =
    winner === false ? "It's a tie" : `The winner is ${winner}`;

  return (
    <section
      className={
        "fixed inset-0 flex items-center justify-center z-50 bg-black/50 fade-in"
      }
    >
      <div className="bg-navy p-6 rounded shadow-lg z-10 h-34 w-52 flex flex-col justify-center items-center gap-4">
        <h2 className="text-whiteCustom text-center">{winnerMessage}</h2>
        <footer>
          <button
            onClick={() => {
              resetGame();
            }}
            className=" bg-teal w-44 h-10 text-whiteCustom font-medium rounded-lg border-none text-xl"
          >
            play again
          </button>
        </footer>
      </div>
    </section>
  );
};
