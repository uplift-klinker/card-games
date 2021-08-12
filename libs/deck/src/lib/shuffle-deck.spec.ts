import { shuffleDeck } from './shuffle-deck';
import { createDeckOfCards } from './models';

describe('shuffle-deck', () => {
  test('when deck shuffled then returns deck in a different order', () => {
    const deck = createDeckOfCards();

    expect(shuffleDeck(deck)).not.toEqual(deck);
  });

  test('when deck shuffled with jokers then returns deck in different order', () => {
    const deck = createDeckOfCards({ includeJokers: true });
    const originalDeck = [...deck];

    const shuffledDeck = shuffleDeck(deck);

    expect(deck).toEqual(originalDeck);
    expect(shuffledDeck).not.toEqual(deck);
  });
});
