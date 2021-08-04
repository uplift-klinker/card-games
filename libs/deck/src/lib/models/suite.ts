export enum Suite {
  Clubs = 'Clubs',
  Spades = 'Spades',
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Jokers = 'Jokers'
}

export const AllSuites = [Suite.Clubs, Suite.Spades, Suite.Hearts, Suite.Diamonds, Suite.Jokers];

export const StandardSuites = AllSuites.filter(s => s !== Suite.Jokers);
