type CharacterProps = {
  direction?: "left" | "right";
  dialog: string;
};

const Character = ({ dialog, direction }: CharacterProps) => {
  return (
    <div
      className={`py-3 w-full flex items-center bg-black/80 rounded-xl ${
        direction === "right" ? "flex-row-reverse pl-2" : "pr-2"
      }`}
    >
      <img
        src="mago-head.png"
        alt="Cabeza del mago"
        className={`w-28 ${direction === "right" && "-scale-x-[1]"}`}
      />
      <p className="w-full bg-white text-center py-2 px-1 rounded-3xl text-slate-800">
        {dialog}
      </p>
    </div>
  );
};

export default Character;
