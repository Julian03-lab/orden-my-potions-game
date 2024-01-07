import { Howl } from "howler";

export const sounds = {
  click: new Howl({ src: ["/sounds/button.wav"] }),
  error: new Howl({ src: ["/sounds/lose.wav"] }),
  success: new Howl({ src: ["/sounds/win.wav"] }),
  drop: new Howl({ src: ["/sounds/gota.wav"] }),
};
