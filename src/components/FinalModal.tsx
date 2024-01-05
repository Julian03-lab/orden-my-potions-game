import React from "react";
import { DialogSVG } from "../assets/dialogSVG";
import { StarsModalBg } from "../assets/starsModalBg";

type Props = {
  open: boolean;
  onClose: () => void;
};

const FinalModal = ({ onClose, open }: Props) => {
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
        <h2 className="text-2xl text-black mb-4 absolute z-10 px-16 pt-5 text-center">
          Congratulations on your victory
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
