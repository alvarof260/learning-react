const WINNER_COMBINATIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // first column
  [1, 4, 7], // second column
  [2, 5, 8], // third column
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

const TURNS = {
  X: "❌",
  O: "⚪",
};

export { WINNER_COMBINATIONS, TURNS };
