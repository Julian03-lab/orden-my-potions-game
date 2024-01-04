type CharacterProps = {
  direction?: "left" | "right";
  dialog: string;
  color: string;
};

const Character = ({ dialog, direction, color }: CharacterProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={` w-full flex items-center rounded-xl py-6 ${
        direction === "right" ? "flex-row-reverse pl-2" : "pr-2"
      }`}
    >
      <img
        src="mago-head.png"
        alt="Cabeza del mago"
        className={`size-[140px] object-cover ${
          direction === "right" ? "-scale-x-[1]" : ""
        }`}
      />
      <p className="bg-white text-center py-6 px-2 rounded-2xl text-[#7634B5] w-2/3 relative">
        <svg
          className="absolute top-1/2 -left-5 w-6"
          width="36"
          height="25"
          viewBox="0 0 36 25"
          fill="none"
        >
          <path
            d="M-1.02722e-06 12.6052L35.8125 0.822743L35.8125 24.3877L-1.02722e-06 12.6052Z"
            fill="#fff"
          />
        </svg>
        {dialog}
      </p>
    </div>
  );
};

export default Character;
