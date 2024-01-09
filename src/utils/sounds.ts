import { Howl } from "howler";
import ClickSound from "../assets/sounds/button.wav";
import ErrorSound from "../assets/sounds/lose.wav";
import SuccessSound from "../assets/sounds/win.mp3";
import DropSound from "../assets/sounds/gota.wav";

export const sounds = {
  click: new Howl({ src: [ClickSound] }),
  error: new Howl({ src: [ErrorSound] }),
  success: new Howl({ src: [SuccessSound] }),
  drop: new Howl({ src: [DropSound] }),
};
