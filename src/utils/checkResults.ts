import { Board } from "../logic";

export function checkResults(
  lastBoard: Board,
  result: string[]
): { board: Board; matchStatus: "win" | "waiting" } {
  const checkedBoard: Board = [];
  let correctsAttemps = 0;
  const colorCount: { [key: string]: number } = {};
  const resultColorCount: { [key: string]: number } = {};

  // Contar la cantidad de veces que cada color aparece en la solución
  for (let index = 0; index < lastBoard.length; index++) {
    const { color } = lastBoard[index];
    if (color in colorCount) {
      colorCount[color]++;
    } else {
      colorCount[color] = 1;
    }
  }

  // Contar la cantidad de veces que cada color aparece en la respuesta del jugador
  for (let index = 0; index < result.length; index++) {
    const color = result[index];
    if (color in resultColorCount) {
      resultColorCount[color]++;
    } else {
      resultColorCount[color] = 1;
    }
  }

  for (let index = 0; index < lastBoard.length; index++) {
    const { color } = lastBoard[index];

    if (
      color === result[index] &&
      colorCount[color] > 0 &&
      resultColorCount[color] > 0
    ) {
      checkedBoard.push({
        status: "correct",
        color: color,
      });
      correctsAttemps++;
      colorCount[color]--;
      resultColorCount[color]--;
    } else {
      checkedBoard.push({
        status: "wrong",
        color: color,
      });
    }
  }

  // Procesar los colores parciales
  for (let index = 0; index < checkedBoard.length; index++) {
    const { color, status } = checkedBoard[index];
    if (
      status === "wrong" &&
      result.includes(color) &&
      colorCount[color] > 0 &&
      resultColorCount[color] > 0
    ) {
      checkedBoard[index] = {
        status: "parcial",
        color: color,
      };
      colorCount[color]--;
      resultColorCount[color]--;
    }
  }

  const matchStatus: "win" | "waiting" =
    correctsAttemps === 5 ? "win" : "waiting";

  return { board: checkedBoard, matchStatus };
}
