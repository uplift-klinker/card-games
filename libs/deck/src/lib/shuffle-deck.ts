import { DeckOfCards } from './models';

export function shuffleDeck(deck: DeckOfCards): DeckOfCards {
  const shuffled = [...deck];
  for (let i = deck.length - 1; i > 0; i--) {
    const swapPoint = Math.floor(Math.random() * i);
    const cardToSwap = deck[i];
    deck[i] = deck[swapPoint];
    deck[swapPoint] = cardToSwap;
  }
  return shuffled;
}
