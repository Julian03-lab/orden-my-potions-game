import React from "react";
import Button from "./Button";
import StartBG from "../assets/images/start-bg.jpg";
import FinalModal from "./FinalModal";

const StartScreen = ({ votes }: { votes: number }) => {
  const [voted, setVoted] = React.useState(false);

  const startGame = () => {
    Rune.actions.voteToStart();
    setVoted(true);
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen py-4 px-6 w-full"
      style={{
        backgroundImage: `url(${StartBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src="Logo.png" alt="Logo" className="w-full h-28 object-cover" />
      <img src="mago.png" alt="Mago" className="w-56 mago my-7" />
      <div className="w-full flex flex-col gap-4">
        <Button onClick={startGame} disabled={voted}>
          Start ({votes || 0}/2)
        </Button>
        <button className="helper-text">How to play</button>
      </div>
    </div>
  );
};

export default StartScreen;
