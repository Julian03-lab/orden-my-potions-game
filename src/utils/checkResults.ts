import { Board } from "../logic";

export function checkResults(
  lastBoard: Board,
  result: string[]
): { board: Board; matchStatus: "win" | "waiting" } {
  const checkedBoard: Board = [];
  let correctsAttemps = 0;

  for (let index = 0; index < lastBoard.length; index++) {
    const { color } = lastBoard[index];

    if (color === result[index]) {
      checkedBoard.push({
        status: "correct",
        color: color,
      });
      correctsAttemps++;
    } else if (result.includes(color)) {
      checkedBoard.push({
        status: "parcial",
        color: color,
      });
    } else {
      checkedBoard.push({
        status: "wrong",
        color: color,
      });
    }
  }

  const matchStatus: "win" | "waiting" =
    correctsAttemps === 5 ? "win" : "waiting";

  return { board: checkedBoard, matchStatus };
}
