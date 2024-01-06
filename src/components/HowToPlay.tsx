import { DialogContainer } from "../assets/dialogContainer";
import { StarsModalBg } from "../assets/starsModalBg";
import Button from "./Button";
import FirstStepHowToPlay from "./FirstStepHowToPlay";
import PurplePotion from "../assets/images/greenPotion.png";
import SecondStepHowToPlay from "./SecondStepHowToPlay";
import ThirdStepHowToPlay from "./ThirdStepHowToPlay";

type HowToPlayProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const HowToPlay = ({ open, setOpen }: HowToPlayProps) => {
  return (
    <>
      {open && (
        <div
          className="absolute w-full z-40 bg-gradient-to-b from-[#2d084a] from-[2%] to-[#b579e4] to-[61%] py-5 px-5 flex flex-col gap-6 overflow-y-auto"
          style={{
            fontFamily: "AbeeZee, sans-serif",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-3 z-20"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                fill="white"
              />
            </svg>
          </button>
          <h1 className="text-lg text-white self-center">Game rules</h1>
          <img
            src="logo.svg"
            alt="Logo"
            className="w-[314px] h-[112px] object-cover self-center"
          />
          <div className="">
            <div className="relative">
              <p className="text-sm text-black w-full px-3 pt-4 relative z-30">
                ¡Insolent ones! They have disordered my magic potions, and now
                they will pay the consequences. Your task is to organize the
                potions by guessing the original color combination. Both players
                will be in different rooms and must take turns while finding the
                solution. They have 8 attempts to achieve it. If they do, they
                will come out unscathed. But if not, they will suffer a 10-year
                spell of bad luck. Let the challenge begin, and may magic be on
                their side!
              </p>
              <DialogContainer className="absolute top-0 h-[140%] w-full" />
            </div>
            <div className="relative  flex items-center justify-center pb-4 mt-10">
              <img
                src="mago-final.png"
                alt="mago final"
                className="mago z-40 relative"
              />
              <StarsModalBg className="absolute bottom-3 z-10" />
            </div>
          </div>
          <div>
            <p className="text-lg text-white mb-1.5">How To Play</p>
            <p className="text-sm text-white">
              Select the color you prefer from the potion panel, then choose
              where you want to place it. Once you have finished creating a
              combination, press the 'Submit Solution' button.
            </p>
          </div>
          <FirstStepHowToPlay />
          <div>
            <p className="text-sm text-white">
              Then you will be able to see the history of your combinations
              where the game clues will be shown.
            </p>
            <div className="flex justify-between w-full mt-6">
              <div className="flex flex-col items-center max-w-24">
                <img
                  src={PurplePotion}
                  className="px-1.5 py-2 rounded-xl bg-[#3DFF50]"
                />
                <p className="text-white text-sm text-center mt-4">
                  The color and position are correct
                </p>
              </div>
              <div className="flex flex-col items-center max-w-24">
                <img
                  src={PurplePotion}
                  className="px-1.5 py-2 rounded-xl bg-[#FBFF3D]"
                />
                <p className="text-white text-sm text-center mt-4">
                  The color is correct but the position is not
                </p>
              </div>
              <div className="flex flex-col items-center max-w-24">
                <img
                  src={PurplePotion}
                  className="px-1.5 py-2 rounded-xl bg-[#EC0505]"
                />
                <p className="text-white text-sm text-center mt-4">
                  Neither the color nor the position are correct
                </p>
              </div>
            </div>
          </div>
          <SecondStepHowToPlay />
          <p className="text-sm text-white">
            Both rooms must have the correct combination to win
          </p>
          <ThirdStepHowToPlay />
          <Button onClick={() => setOpen(false)}>Go Back</Button>
        </div>
      )}
    </>
  );
};

export default HowToPlay;
