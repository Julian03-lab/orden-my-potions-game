import type { RuneClient } from "rune-games-sdk/multiplayer";
import { checkResults } from "./utils/checkResults";
import { characterDialogs } from "./assets/dialogs";

const CELLS = 5;
const ATTEMPTS = 5;

export type Board = {
  status: "empty" | "parcial" | "correct" | "wrong";
  color: string;
}[];

export interface GameState {
  players: {
    [playerID: string]: { universe: number };
  };
  universe: {
    [universe: number]: {
      board: Board[];
      matchStatus: "win" | "playing" | "waiting";
      secretResult: string[];
      remainingAttempts: number;
    };
  };
  votesToSwap: number;
  gameFinished: null | "WON" | "LOST";
  dialog: string;
  solutionsNumber: number;
  votesToStart: number;
}

type GameActions = {
  swapUniverses: () => void;
  setResult: (status: "win" | "waiting") => void;
  sendSolution: (guess: Board) => void;
  voteToStart: () => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

const initialBoard: Board[] = [];

const colors = ["red", "blue", "green", "orange", "purple"];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup: (allPlayerIds): GameState => {
    const game: GameState = {
      votesToStart: 0,
      solutionsNumber: 0,
      gameFinished: null,
      votesToSwap: 0,
      dialog: characterDialogs.playing,
      players: {},
      universe: {
        0: {
          remainingAttempts: ATTEMPTS,
          board: initialBoard,
          secretResult: Array(CELLS).fill("").map(randomColor),
          matchStatus: "playing",
        },
        1: {
          remainingAttempts: ATTEMPTS,
          board: initialBoard,
          secretResult: Array(CELLS).fill("").map(randomColor),
          matchStatus: "playing",
        },
      },
    };
    let actualUniverse = 0;
    for (const playerID of allPlayerIds) {
      game.players[playerID] = {
        universe: actualUniverse,
      };
      actualUniverse++;
    }
    return game;
  },
  actions: {
    voteToStart(_, { game }) {
      game.votesToStart++;
    },
    swapUniverses(_, { game, playerId }) {
      game.votesToSwap++;

      if (game.votesToSwap < 2) return;

      const otherPlayer = Object.keys(game.players).find(
        (otherPlayerID) => otherPlayerID !== playerId
      );

      const playerA = game.players[playerId];
      const playerB = game.players[otherPlayer as string];

      [playerA.universe, playerB.universe] = [
        playerB.universe,
        playerA.universe,
      ];

      game.universe[playerA.universe].matchStatus =
        game.universe[playerA.universe].matchStatus !== "win"
          ? "playing"
          : "win";
      game.universe[playerB.universe].matchStatus =
        game.universe[playerB.universe].matchStatus !== "win"
          ? "playing"
          : "win";

      game.votesToSwap = 0;
      game.dialog = characterDialogs.playing;
      game.solutionsNumber = 0;
    },

    sendSolution(guess, { game, playerId, allPlayerIds }) {
      const playerUniverse = game.players[playerId].universe;
      const { secretResult } = game.universe[playerUniverse];

      const { matchStatus: newStatus, board: newBoard } = checkResults(
        guess,
        secretResult
      );
      game.universe[playerUniverse].board.push(newBoard);

      game.universe[playerUniverse].matchStatus = newStatus;

      game.solutionsNumber++;

      if (game.solutionsNumber === 2) {
        game.dialog = characterDialogs.secondSent;
      } else {
        game.dialog = characterDialogs.firstSent;
      }

      if (Object.values(game.universe).every((u) => u.matchStatus === "win")) {
        game.gameFinished = "WON";
        Rune.gameOver({
          players: {
            [allPlayerIds[0]]: "WON",
            [allPlayerIds[1]]: "WON",
          },
          delayPopUp: true,
        });
        return;
      }

      game.universe[playerUniverse].remainingAttempts--;

      if (
        game.universe[0].remainingAttempts === 0 ||
        game.universe[1].remainingAttempts === 0
      ) {
        game.gameFinished = "LOST";
        Rune.gameOver({
          players: {
            [allPlayerIds[0]]: "LOST",
            [allPlayerIds[1]]: "LOST",
          },
          delayPopUp: true,
        });
        return;
      }
    },

    setResult(status, { game, playerId }) {
      const playerUniverse = game.players[playerId].universe;
      game.universe[playerUniverse].matchStatus = status;
    },
  },
});
