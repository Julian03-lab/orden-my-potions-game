type Dialogs = {
  playing: string;
  firstSent: string;
  secondSent: string;
};

export const characterDialogs: Dialogs = {
  playing: "Be VERY careful when ordering my potions.",
  firstSent:
    "One of you has already finished, I recommend you to analyze the solution while the other one is finishing.",
  secondSent:
    "Good! I see you are both done, as soon as you are ready you can change rooms.",
};

export const endDialogs = {
  WON: ["Oh no! You have found the secret formula!", "You have won!"],
  LOST: ["Haha! You will never find the secret formula!", "You have lost!"],
};
