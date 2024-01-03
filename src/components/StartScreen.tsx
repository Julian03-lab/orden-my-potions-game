import React from "react";
import Button from "./Button";

const StartScreen = ({ votes }: { votes: number }) => {
  const [voted, setVoted] = React.useState(false);

  const startGame = () => {
    Rune.actions.voteToStart();
    setVoted(true);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center py-8 px-6 w-full gap-8">
      <div className="flex justify-evenly w-full">
        <img src="mago.png" alt="Mago" className="h-28 w-auto mago" />
        <h1 className="text-violet-600 text-3xl">
          Order <br />
          My <br />
          Potions!
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Button onClick={startGame} disabled={voted}>
          Start ({votes || 0}/2)
        </Button>
        <button>How to play</button>
      </div>
    </div>
  );
};

export default StartScreen;
