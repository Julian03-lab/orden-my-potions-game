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
          <h1 className="text-lg text-white self-center">Reglas del juego</h1>
          <img
            src="logo.svg"
            alt="Logo"
            className="w-[314px] h-[112px] object-cover self-center"
          />
          <div className="">
            <div className="relative">
              <p className="text-sm text-black w-full px-3 pt-4 relative z-30">
                ¡Insolentes! Han desordenado mis pociones mágicas y ahora
                pagarán las consecuencias. Vuestra tarea es organizar las
                pociones adivinando la combinación de colores original. Ambos
                jugadores estarán en habitaciones diferentes y deberán ir
                alternándose mientras encuentran la solución. Tienen 8 intentos
                para lograrlo. Si lo hacen, saldrán ilesos. Pero si no, sufrirán
                un hechizo de 10 años de mala suerte. ¡Que empiece el desafío y
                que la magia esté de su lado!
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
            <p className="text-lg text-white mb-1.5">Como se juega</p>
            <p className="text-sm text-white">
              Selecciona el color que prefieras del panel de pociones, luego
              elige donde lo quieres poner, una vez hayas terminado de crear una
              combinación presiona el botón enviar solución.{" "}
            </p>
          </div>
          <FirstStepHowToPlay />
          <div>
            <p className="text-sm text-white">
              Luego se mostrara el historial de tus combinaciones donde se
              mostraran las pistas del juego
            </p>
            <div className="flex justify-between w-full mt-6">
              <div className="flex flex-col items-center max-w-24">
                <img
                  src={PurplePotion}
                  className="px-1.5 py-2 rounded-xl bg-[#3DFF50]"
                />
                <p className="text-white text-sm text-center mt-4">
                  El color y posición son correctos
                </p>
              </div>
              <div className="flex flex-col items-center max-w-24">
                <img
                  src={PurplePotion}
                  className="px-1.5 py-2 rounded-xl bg-[#FBFF3D]"
                />
                <p className="text-white text-sm text-center mt-4">
                  El color es correcto pero no la posición
                </p>
              </div>
              <div className="flex flex-col items-center max-w-24">
                <img
                  src={PurplePotion}
                  className="px-1.5 py-2 rounded-xl bg-[#EC0505]"
                />
                <p className="text-white text-sm text-center mt-4">
                  Ni el color ni la posición son correctas.
                </p>
              </div>
            </div>
          </div>
          <SecondStepHowToPlay />
          <p className="text-sm text-white">
            Ambas habitaciones deben tener la combinación correcta para ganar
          </p>
          <ThirdStepHowToPlay />
          <Button onClick={() => setOpen(false)}>Volver</Button>
        </div>
      )}
    </>
  );
};

export default HowToPlay;
