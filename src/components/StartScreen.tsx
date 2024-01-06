import React from "react";
import Button from "./Button";
import StartBG from "../assets/images/start-bg.jpg";
import HowToPlay from "./HowToPlay";

const StartScreen = ({ votes }: { votes: number }) => {
  const [voted, setVoted] = React.useState(false);
  const [howToPlayOpen, setHowToPlayOpen] = React.useState(false);

  const startGame = () => {
    Rune.actions.voteToStart();
    setVoted(true);
  };

  return (
    <>
      <HowToPlay open={howToPlayOpen} setOpen={setHowToPlayOpen} />
      <div
        className="flex flex-col items-center min-h-screen py-4 px-6 w-full"
        style={{
          backgroundImage: `url(${StartBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="Logo.png" alt="Logo" className="h-48" />
        <img src="mago.png" alt="Mago" className="w-56 mago my-7" />
        <div className="w-full flex flex-col gap-4">
          <Button onClick={startGame} disabled={voted}>
            Start ({votes || 0}/2)
          </Button>
          <button
            className="helper-text"
            onClick={() => setHowToPlayOpen(true)}
          >
            How to play
          </button>
        </div>
      </div>
    </>
  );
};

export default StartScreen;
