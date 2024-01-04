import { useState } from "react";
import CombinationDrawer from "./CombinationDrawer";
import { Board } from "../logic";
import Button from "./Button";

type UniverseProps = {
  children: React.ReactNode;
  game: {
    board: Board[];
    matchStatus: "win" | "lose" | "playing" | "waiting";
    secretResult: string[];
  };
};

const UniverseB = ({
  game: { board, matchStatus },
  children,
}: UniverseProps) => {
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
    <div className="flex flex-col gap-3 items-center min-h-screen h-full px-4 py-6 w-full bg-black/50">
      <div
        className="w-full h-full fixed top-0 left-0 -z-10"
        style={{
          backgroundImage: `url(bg-2.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      {matchStatus === "playing" || matchStatus === "waiting" ? (
        <>
          {children}
          <div className="flex flex-col gap-4 items-center bg-emerald-500/40 py-5 px-2 rounded-xl backdrop-blur-[2px]">
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
            ) : (
              !changeSent && (
                <Button
                  onClick={() => {
                    Rune.actions.swapUniverses();
                    setChangeSent(true);
                  }}
                >
                  Vote to Change Room
                </Button>
              )
            )}
            {!changeSent && board.length > 0 && (
              <div className="w-full h-px bg-white/50" />
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
