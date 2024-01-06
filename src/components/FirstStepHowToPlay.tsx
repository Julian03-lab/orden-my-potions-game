import { HeartSvg } from "../assets/HeartSVG";
import EstanteImage from "../assets/images/estante.png";
import GreenPotion from "../assets/images/greenPotion.png";
import PurplePotion from "../assets/images/pinkPotion.png";
import BluePotion from "../assets/images/bluePotion.png";
import YellowPotion from "../assets/images/yellowPotion.png";
import RedPotion from "../assets/images/redPotion.png";
import EmptyPotion from "../assets/images/emptyPotion.png";
import Button from "./Button";
import { HandSvg } from "../assets/handSvg";

const colors = ["red", "blue", "green", "orange", "purple"];

const colorToImage = (color: string) => {
  switch (color) {
    case "red":
      return RedPotion;
    case "blue":
      return BluePotion;
    case "green":
      return GreenPotion;
    case "orange":
      return YellowPotion;
    case "purple":
      return PurplePotion;
    default:
      return EmptyPotion;
  }
};

const FirstStepHowToPlay = () => {
  return (
    <div className="bg-[#79e4c4]/70 backdrop-blur-[2px] rounded-2xl pt-3 px-2.5 pb-10 flex flex-col gap-4">
      <div className="flex justify-between items-center relative">
        <p className="text">Room 1</p>
        <div className="relative flex">
          <p className="text-white text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1">
            8
          </p>
          <HeartSvg
            className="size-10"
            style={{
              filter: "drop-shadow(0px 0px 10px #00FFC2)",
            }}
          />
        </div>
        <div className="flex flex-col items-center absolute -top-11 -right-2">
          <p className="text-sm text-white">Attempts</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="30"
            viewBox="0 0 14 30"
            fill="none"
          >
            <g>
              <path
                d="M6.5 17L4.11325 22L9.88675 22L7.5 17L6.5 17ZM7 -4.76837e-07L4.11325 5L9.88675 5L7 -4.76837e-07ZM7.5 17.5L7.5 4.5L6.5 4.5L6.5 17.5L7.5 17.5Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-white flex w-full justify-between rounded-xl p-2 relative">
        <HandSvg className="absolute top-9 left-4" />
        {colors.map((color) => (
          <button key={color}>
            <img
              className={`w-12 h-auto p-1.5 rounded-[10px] ${
                color === "red" ? "bg-[#E1DEE1]" : ""
              }`}
              src={colorToImage(color)}
            />
          </button>
        ))}
      </div>
      <div className="flex flex-col w-full mb-5 relative">
        <HandSvg className="absolute top-7 right-14 z-20" />
        <div className="flex w-full justify-between">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              className={`w-12 h-auto p-1.5 z-10 relative`}
              src={EmptyPotion}
            />
          ))}
        </div>
        <img
          src={EstanteImage}
          alt="Estante"
          className="w-full h-auto relative -top-2 z-0"
          style={{
            filter: "drop-shadow(0px 12px 11px rgba(0, 0, 0, 1))",
          }}
        />
      </div>
      <div className="relative">
        <HandSvg className="absolute top-4 right-4 z-20" />
        <Button>Send solution</Button>
      </div>
    </div>
  );
};

export default FirstStepHowToPlay;
