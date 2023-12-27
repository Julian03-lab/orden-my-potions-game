import React, { useEffect, useState } from "react";

const GameFinished: React.FC = () => {
  const [displayText, setDisplayText] = useState("Ahhh me vencieron");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText("Esto es suyo");
      setTimeout(() => {
        // Execute your function here
        Rune.showGameOverPopUp();
      }, 2000);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div>{displayText}</div>;
};

export default GameFinished;
