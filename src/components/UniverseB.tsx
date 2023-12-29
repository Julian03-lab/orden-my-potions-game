import { useState } from "react";
import CombinationDrawer from "./CombinationDrawer";
import { Board } from "../logic";
import Button from "./Button";

type UniverseProps = {
  game: {
    board: Board[];
    matchStatus: "win" | "lose" | "playing" | "waiting";
    secretResult: string[];
  };
};

const UniverseB = ({ game: { board, matchStatus } }: UniverseProps) => {
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
    <div
      className="flex flex-col gap-4 items-center min-h-screen h-full px-4 pt-12 w-full bg-gradient-to-br from-orange-600 to-orange-500"
      style={{
        // backgroundImage: `url(test-bg.png)`,
        backgroundSize: "",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      {matchStatus === "playing" || matchStatus === "waiting" ? (
        <>
          <h1 className="text-center text-white">This is the universe B!</h1>
          {!guessSent ? (
            <>
              <CombinationDrawer
                combination={guess}
                setCombination={setGuess}
                matchStatus={matchStatus}
              />
              <Button disabled={isDisabled} onClick={handleSendSolution}>
                Send Solution
              </Button>
            </>
          ) : !changeSent ? (
            <Button
              onClick={() => {
                Rune.actions.swapUniverses();
                setChangeSent(true);
              }}
            >
              Change Room
            </Button>
          ) : (
            <div>Esperando a que tu compañero finalize</div>
          )}
          <div className="w-full flex flex-col-reverse gap-2">
            {board.map(
              (row, i) => (
                // i < board.length - 1 || matchStatus !== "waiting" ? (
                <CombinationDrawer key={i} combination={row} />
              )
              // ) : (
              //   <div key={i}>Esto esta oculta hasta la proxima ronda</div>
              // )
            )}
          </div>
        </>
      ) : (
        <div className=" flex flex-col gap-4">
          {!changeSent ? (
            <Button
              onClick={() => {
                Rune.actions.swapUniverses();
                setChangeSent(true);
              }}
            >
              Change Room
            </Button>
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

export default UniverseB;
