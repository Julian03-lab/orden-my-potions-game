import { HeartSvg } from "../assets/HeartSVG";
import GreenPotion from "../assets/images/greenPotion.png";
import PurplePotion from "../assets/images/pinkPotion.png";
import BluePotion from "../assets/images/bluePotion.png";
import YellowPotion from "../assets/images/yellowPotion.png";
import RedPotion from "../assets/images/redPotion.png";
import EmptyPotion from "../assets/images/emptyPotion.png";
import Button from "./Button";

// const colors = ["red", "blue", "green", "orange", "purple"];

const colors = [
  {
    color: "red",
    status: "correct",
  },
  {
    color: "blue",
    status: "correct",
  },
  {
    color: "green",
    status: "correct",
  },
  {
    color: "orange",
    status: "correct",
  },
  {
    color: "purple",
    status: "correct",
  },
];

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

const ThirdStepHowToPlay = () => {
  return (
    <div className="bg-[#79e4c4]/70 backdrop-blur-[2px] rounded-2xl py-3 px-2.5 flex flex-col gap-4">
      <div className="flex justify-between items-center relative">
        <p className="text">Room 1</p>
        <div className="relative flex">
          <p className="text-white text-xl absolute z-10 left-1/2 -translate-x-1/2 top-1">
            5
          </p>
          <HeartSvg
            className="size-10"
            style={{
              filter: "drop-shadow(0px 0px 10px #00FFC2)",
            }}
          />
        </div>
      </div>
      <div className="relative">
        {/* <HandSvg className="absolute top-4 right-4 z-20" /> */}
        <Button>Vote to change room</Button>
      </div>
      <p className="text">Correct combination</p>
      <div className="w-full h-px bg-white"></div>
      <div className="flex flex-col w-full mb-5 relative">
        <div className="flex w-full justify-between">
          {colors.map((object) => (
            <img
              key={object.color}
              className={`w-12 h-auto p-1.5 z-10 relative ${object.status}`}
              src={colorToImage(object.color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdStepHowToPlay;
