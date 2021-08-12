import { CardColor } from './card-color';

export enum Suite {
  Clubs = 'Clubs',
  Spades = 'Spades',
  Hearts = 'Hearts',
  Diamonds = 'Diamonds',
  Jokers = 'Jokers'
}

export const AllSuites = [Suite.Clubs, Suite.Spades, Suite.Hearts, Suite.Diamonds, Suite.Jokers];

export const StandardSuites = AllSuites.filter(s => s !== Suite.Jokers);

export function convertSuiteToColor(suite: Suite): CardColor {
  switch (suite) {
    case Suite.Clubs:
    case Suite.Spades:
      return CardColor.Black;

    case Suite.Hearts:
    case Suite.Diamonds:
      return CardColor.Red;

    default:
      return CardColor.Joker;
  }
}
