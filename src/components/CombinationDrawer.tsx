import { useState } from "react";
import { Board } from "../logic";
import EstanteImage from "../assets/images/estante.png";
import GreenPotion from "../assets/images/greenPotion.png";
import PurplePotion from "../assets/images/pinkPotion.png";
import BluePotion from "../assets/images/bluePotion.png";
import YellowPotion from "../assets/images/yellowPotion.png";
import RedPotion from "../assets/images/redPotion.png";
import EmptyPotion from "../assets/images/emptyPotion.png";

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
        <div className="bg-red-400/80 flex w-full justify-between p-2 border border-black rounded-xl">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                if (selectedColor === color) {
                  setSelectedColor("");
                } else {
                  setSelectedColor(color);
                }
              }}
              // draggable={true}
              // onDragStart={() => handleDragStart(color)}
            >
              <img
                className={`w-10 h-auto ${
                  color === selectedColor ? "glow" : ""
                }`}
                src={colorToImage(color)}
              />
            </button>
          ))}
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between px-2">
          {combination.map(({ color, status }, i) => (
            <button
              key={i}
              onClick={() => handleSelection(i)}
              // draggable={false}
              // onDragOver={handleDragOver}
              // onDrop={() => handleDrop(i)}
            >
              <img
                className={`w-10 h-auto ${status} z-10 relative`}
                src={colorToImage(color)}
              />
            </button>
          ))}
        </div>
        <img
          src={EstanteImage}
          alt="Estante"
          className="w-full h-auto relative -top-1 z-0"
          style={{
            filter: "drop-shadow(0px 12px 11px rgba(0, 0, 0, 1))",
          }}
        />
      </div>
    </>
  );
};

export default CombinationDrawer;
