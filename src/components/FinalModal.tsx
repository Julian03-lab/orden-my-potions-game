import React, { useEffect, useState } from "react";
import { DialogSVG } from "../assets/dialogSVG";
import { StarsModalBg } from "../assets/starsModalBg";
import { endDialogs } from "../assets/dialogs";
import { sounds } from "../utils/sounds";

type Props = {
  open: boolean;
  onClose: () => void;
  result: "WON" | "LOST";
};

const FinalModal = ({ onClose, open, result }: Props) => {
  const [displayText, setDisplayText] = useState(endDialogs[result][0]);

  useEffect(() => {
    result === "WON" ? sounds.success.play() : sounds.error.play();
    const timer = setTimeout(() => {
      setDisplayText(endDialogs[result][1]);
      setTimeout(() => {
        Rune.showGameOverPopUp();
      }, 2000);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [result]);

  return (
    <div
      className={`fixed inset-0 items-center justify-center z-50 bg-black/80 px-6 ${
        open ? "flex" : "hidden"
      }`}
    >
      <div className="modal-bg rounded-[20px] relative overflow-hidden flex flex-col items-center w-full pb-4">
        <button onClick={onClose} className="absolute top-4 right-3 z-20">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="relative py-4">
          <DialogSVG className="w-full absolute top-0 h-[155%]" />
          <h2 className="text-lg text-black px-6 pb-4 text-center relative z-30">
            {displayText}
          </h2>
        </div>
        <StarsModalBg className="absolute bottom-3" />
        <img
          src="mago-final.png"
          alt="mago final"
          className="relative z-30 mt-4"
        />
      </div>
    </div>
  );
};

export default FinalModal;
