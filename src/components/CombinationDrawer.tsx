import { useState } from "react";
import { Board } from "../logic";
import EstanteImage from "../assets/images/estante.png";
import GreenPotion from "../assets/images/greenPotion.png";
import PurplePotion from "../assets/images/pinkPotion.png";
import BluePotion from "../assets/images/bluePotion.png";
import YellowPotion from "../assets/images/yellowPotion.png";
import RedPotion from "../assets/images/redPotion.png";
import EmptyPotion from "../assets/images/emptyPotion.png";
import { sounds } from "../utils/sounds";

type CombinationDrawerProps = {
  combination: Board;
  setCombination?: React.Dispatch<React.SetStateAction<Board>>;
  matchStatus?: "win" | "lose" | "playing" | "waiting";
};

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

const CombinationDrawer = ({
  combination,
  setCombination,
  matchStatus = "playing",
}: CombinationDrawerProps) => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleSelection = (index: number) => {
    if (selectedColor === "") return;
    setCombination &&
      matchStatus === "playing" &&
      setCombination((prev) => {
        const newCombination = [...prev];
        sounds.drop.play();
        newCombination[index] = {
          ...newCombination[index],
          color: selectedColor,
        };
        setSelectedColor("");
        return newCombination;
      });
  };

  return (
    <>
      {setCombination && (
        <div className="bg-white flex w-full justify-between rounded-xl p-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                if (selectedColor === color) {
                  setSelectedColor("");
                } else {
                  sounds.drop.play();
                  setSelectedColor(color);
                }
              }}
            >
              <img
                className={`w-12 h-auto p-1.5 rounded-[10px] ${
                  color === selectedColor ? "bg-[#E1DEE1]" : ""
                }`}
                src={colorToImage(color)}
              />
            </button>
          ))}
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between">
          {combination.map(({ color, status }, i) => (
            <button key={i} onClick={() => handleSelection(i)}>
              <img
                className={`w-12 h-auto p-1.5 ${status} z-10 relative`}
                src={colorToImage(color)}
              />
            </button>
          ))}
        </div>
        {setCombination && (
          <img
            src={EstanteImage}
            alt="Estante"
            className="w-full h-auto relative -top-2 z-0"
            style={{
              filter: "drop-shadow(0px 12px 11px rgba(0, 0, 0, 1))",
            }}
          />
        )}
      </div>
    </>
  );
};

export default CombinationDrawer;
