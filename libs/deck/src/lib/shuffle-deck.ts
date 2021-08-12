import { DeckOfCards } from './models';

export function shuffleDeck(deck: DeckOfCards): DeckOfCards {
  const shuffled = [...deck];
  for (let i = deck.length - 1; i > 0; i--) {
    const swapPoint = Math.floor(Math.random() * i);
    const cardToSwap = shuffled[i];
    shuffled[i] = shuffled[swapPoint];
    shuffled[swapPoint] = cardToSwap;
  }
  return shuffled;
}
