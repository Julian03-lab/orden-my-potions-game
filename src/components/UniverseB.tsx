import { useState } from "react";
import CombinationDrawer from "./CombinationDrawer";
import { Board } from "../logic";
import Button from "./Button";
import { HeartSvg } from "../assets/HeartSVG";
import { sounds } from "../utils/sounds";

type UniverseProps = {
  children: React.ReactNode;
  game: {
    board: Board[];
    matchStatus: "win" | "lose" | "playing" | "waiting";
    secretResult: string[];
    remainingAttempts: number;
  };
};

const UniverseB = ({
  game: { board, matchStatus, remainingAttempts },
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
    sounds.click.play();
    Rune.actions.sendSolution(guess);
    setGuessSent(true);
  };

  const isDisabled =
    guess.some((item) => item.color === "gray") || matchStatus === "waiting";

  return (
    <div className="flex flex-col gap-3 items-center min-h-screen h-full px-2 py-6 w-full bg-black/50">
      <div
        className="w-full h-full fixed top-0 left-0 -z-10"
        style={{
          backgroundImage: `url(bg-2.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      {children}
      <div className="flex flex-col gap-4 items-center bg-[#79e4c4]/70 pt-3 pb-10 px-2 rounded-2xl backdrop-blur-[2px] w-full">
        <span className="w-full flex justify-between items-center px-2">
          <h1 className="text">Room 2</h1>
          <div className="relative flex">
            <p className="text-white text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1">
              {remainingAttempts}
            </p>
            <HeartSvg
              className="size-10"
              style={{
                filter: "drop-shadow(0px 0px 10px #00FFC2)",
              }}
            />
          </div>
        </span>
        {matchStatus === "playing" || matchStatus === "waiting" ? (
          <>
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
                    sounds.click.play();
                    Rune.actions.swapUniverses();
                    setChangeSent(true);
                  }}
                >
                  Vote to Change Room
                </Button>
              )
            )}
            {board.length > 0 && <h2 className="text">History</h2>}
            <div className="w-full flex flex-col-reverse gap-5">
              {board.map(
                (row, i) => (
                  // i < board.length - 1 || matchStatus !== "waiting" ? (
                  <>
                    <CombinationDrawer key={i} combination={row} />
                    <div className="w-full h-px bg-white" />
                  </>
                )
                // ) : (
                //   <div key={i}>Esto esta oculta hasta la proxima ronda</div>
                // )
              )}
            </div>
          </>
        ) : (
          <>
            {!changeSent ? (
              <Button
                onClick={() => {
                  sounds.click.play();
                  Rune.actions.swapUniverses();
                  setChangeSent(true);
                }}
              >
                Vote to change room
              </Button>
            ) : (
              <></>
            )}
            <h1 className="text">Correct combination</h1>
            <div className="w-full flex flex-col-reverse gap-5">
              {board.map((row, i) => (
                <>
                  <CombinationDrawer key={i} combination={row} />
                  <div className="w-full h-px bg-white" />
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UniverseB;
