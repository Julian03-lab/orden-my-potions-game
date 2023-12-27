import { useState } from "react";
import { Board } from "../logic";
import selectSFX from "../assets/select.mp3";

type CombinationDrawerProps = {
  combination: Board;
  setCombination?: React.Dispatch<React.SetStateAction<Board>>;
  matchStatus?: "win" | "lose" | "playing" | "waiting";
};

const colors = ["red", "blue", "green", "orange", "purple"];

const statusToColor = (status: "empty" | "parcial" | "correct" | "wrong") => {
  switch (status) {
    case "empty":
      return "gray";
    case "parcial":
      return "yellow";
    case "correct":
      return "green";
    case "wrong":
      return "red";
  }
};

const CombinationDrawer = ({
  combination,
  setCombination,
  matchStatus = "playing",
}: CombinationDrawerProps) => {
  const [index, setIndex] = useState<null | number>(null);
  const selectSound = new Audio(selectSFX);

  const handleOpenSelector = (i: number) => {
    if (index === null || index !== i) {
      setIndex(i);
    } else {
      setIndex(null);
    }
  };

  return (
    <>
      {index !== null && (
        <div className="bg-red-400/80 flex w-full justify-between p-2 border border-black rounded-xl">
          {colors.map((color) => (
            <button
              key={color}
              className={`size-8 rounded-full ${
                setCombination !== null ? "cursor-pointer" : "cursor-default"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => {
                setCombination &&
                  setCombination((prev) => {
                    const newCombination = [...prev];
                    newCombination[index] = {
                      ...newCombination[index],
                      color,
                    };
                    setIndex(null);
                    selectSound.play();
                    return newCombination;
                  });
              }}
            />
          ))}
        </div>
      )}
      <div className="bg-slate-500 flex w-full justify-between p-2 border border-black rounded-xl">
        {combination.map(({ color, status }, i) => (
          <button
            key={i}
            className={`size-8 rounded-full border-[3px] ${
              setCombination && matchStatus === "playing"
                ? "cursor-pointer"
                : "cursor-default"
            }`}
            style={{
              backgroundColor: color,
              borderColor: statusToColor(status),
            }}
            onClick={() => {
              matchStatus === "playing" &&
                setCombination &&
                handleOpenSelector(i);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CombinationDrawer;
