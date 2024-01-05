import React, { useEffect, useState } from "react";
import { DialogSVG } from "../assets/dialogSVG";
import { StarsModalBg } from "../assets/starsModalBg";
import { endDialogs } from "../assets/dialogs";

type Props = {
  open: boolean;
  onClose: () => void;
  result: "WON" | "LOST";
};

const FinalModal = ({ onClose, open, result }: Props) => {
  const [displayText, setDisplayText] = useState(endDialogs[result][0]);

  useEffect(() => {
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
      <div className="modal-bg rounded-[20px] relative overflow-hidden flex flex-col items-center h-[393px] w-full">
        <button onClick={onClose} className="absolute top-4 right-3 z-20">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
              fill="black"
            />
          </svg>
        </button>
        <DialogSVG className="w-full" />
        <StarsModalBg className="absolute bottom-3" />
        <h2 className="text-xl text-black absolute px-2 z-10 text-center top-8">
          {displayText}
        </h2>
        <img
          src="mago-final.png"
          alt="mago final"
          className="absolute bottom-3"
        />
      </div>
    </div>
  );
};

export default FinalModal;
