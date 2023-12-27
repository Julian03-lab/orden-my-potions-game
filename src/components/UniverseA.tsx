import { useState } from "react";
import CombinationDrawer from "./CombinationDrawer";
import { Board } from "../logic";

type UniverseProps = {
  game: {
    board: Board[];
    matchStatus: "win" | "lose" | "playing" | "waiting";
    secretResult: string[];
  };
};

const UniverseA = ({ game: { board, matchStatus } }: UniverseProps) => {
  const [guess, setGuess] = useState<Board>(
    Array(5).fill({
      status: "empty",
      color: "gray",
    })
  );
  const [guessSent, setGuessSent] = useState<boolean>(false);
  const [changeSent, setChangeSent] = useState<boolean>(false);

  const handleSendSolution = () => {
    Rune.actions.sendSolution(guess);
    setGuessSent(true);
  };

  const isDisabled =
    guess.some((item) => item.color === "gray") || matchStatus === "waiting";

  return (
    <div className="flex flex-col gap-4 items-center">
      {matchStatus === "playing" || matchStatus === "waiting" ? (
        <>
          <h1 className="text-center">This is the universe A!</h1>
          {!guessSent ? (
            <>
              <CombinationDrawer
                combination={guess}
                setCombination={setGuess}
                matchStatus={matchStatus}
              />
              <button
                className="bg-red-400 p-2 w-full rounded-xl hover:bg-red-500 font-bold disabled:bg-red-400"
                disabled={isDisabled}
                onClick={handleSendSolution}
              >
                Send Solution
              </button>
            </>
          ) : !changeSent ? (
            <button
              onClick={() => {
                Rune.actions.swapUniverses();
                setChangeSent(true);
              }}
              className="w-full p-2 bg-violet-500 rounded-xl"
            >
              Cambiar
            </button>
          ) : (
            <div>Esperando a que tu compañero finalize</div>
          )}
          <div className="w-full flex flex-col-reverse gap-2">
            {board.map((row, i) =>
              i < board.length - 1 || matchStatus !== "waiting" ? (
                <CombinationDrawer key={i} combination={row} />
              ) : (
                <div key={i}>Esto esta oculta hasta la proxima ronda</div>
              )
            )}
          </div>
        </>
      ) : (
        <div className=" flex flex-col gap-4">
          {!changeSent ? (
            <button
              onClick={() => {
                Rune.actions.swapUniverses();
                setChangeSent(true);
              }}
              className="w-full p-2 bg-violet-500 rounded-xl"
            >
              Cambiar
            </button>
          ) : (
            <div>Esperando a que tu compañero finalize</div>
          )}
          <h1 className="text-center text-2xl font-bold">
            Combinacion Correcta
          </h1>
          <div className="w-full flex flex-col-reverse gap-2">
            {board.map((row, i) => (
              <CombinationDrawer key={i} combination={row} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniverseA;
