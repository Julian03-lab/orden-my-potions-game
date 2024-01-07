type Dialogs = {
  playing: string;
  firstSent: string;
  secondSent: string;
};

export const characterDialogs: Dialogs = {
  playing: "Be VERY careful when ordering my potions.",
  firstSent:
    "I'm glad you're done, as soon as you're ready, vote to change rooms.",
  secondSent: "Let's wait together while your partner finishes.",
};

export const WizardQuotes = [
  "A while back, I inadvertently created a potion that made inanimate objects speak.",
  "Once, a curious intruder switched the labels, and I ended up drinking a potion to become invisible. Now, every time I sneeze, I scare the neighbors.",
  "At one point, due to a mistake, I mixed a love potion with a transformation one. As a result, I fell in love with my own reflection in the mirror for a week.",
  "There was a rival who always mocked my tricks. I cast a spell so that, every time he tried to insult me, he burst into uncontrollable laughter. Now he is known as 'The Enchanted Jester.'",
  "My rival used to steal my spells. To stop him, I cast a curse that made his hands stick together every time he tried to take something that didn't belong to him.",
];

export const endDialogs = {
  WON: [
    "Congratulations! You have deciphered the combination, aligning the magical potions perfectly.",
    "The room radiates positive energy, and you emerge unharmed, dodging the 10-year spell. Victory is yours.",
  ],
  LOST: [
    "Oh no! You failed in your attempts to organize my potions, the room darkens with the weight of imminent doom.",
    "Despite five valiant attempts, the 10-year spell of bad luck prevails, casting a shadow over your destiny.",
  ],
};
