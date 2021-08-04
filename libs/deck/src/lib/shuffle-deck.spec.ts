import { DeckOfCardsFactory } from './deck-of-cards-factory';
import { shuffleDeck } from './shuffle-deck';

describe('shuffle-deck', () => {
  test('when deck shuffled then returns deck in a different order', () => {
    const deck = DeckOfCardsFactory.create();

    expect(shuffleDeck(deck)).not.toEqual(deck);
  });

  test('when deck shuffled with jokers then returns deck in different order', () => {
    const deck = DeckOfCardsFactory.create({ includeJokers: true });

    expect(shuffleDeck(deck)).not.toEqual(deck);
  });
});
