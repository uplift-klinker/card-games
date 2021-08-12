import { Card } from './card';
import { createDeckOfCards } from './deck-of-cards';
import { Rank } from './rank';
import { Suite } from './suite';

describe('Deck of Cards', () => {
  test('when standard deck created then deck has 52 cards', () => {
    const deck = createDeckOfCards();

    expect(deck).toHaveLength(52);
  });

  test('when standard deck created then deck has 13 cards in each suite', () => {
    const deck = createDeckOfCards();

    expectDeckToHaveCardsInSuite(deck, Suite.Spades, 13);
    expectDeckToHaveCardsInSuite(deck, Suite.Clubs, 13);
    expectDeckToHaveCardsInSuite(deck, Suite.Hearts, 13);
    expectDeckToHaveCardsInSuite(deck, Suite.Diamonds, 13);
  });

  test('when standard deck created then deck has 4 cards in each rank', () => {
    const deck = createDeckOfCards();

    expectDeckToHaveCardsWithRank(deck, Rank.Ace, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Two, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Three, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Four, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Five, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Six, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Seven, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Eight, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Nine, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Ten, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Jack, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.Queen, 4);
    expectDeckToHaveCardsWithRank(deck, Rank.King, 4);
  });

  test('when joker deck created then deck has 54 cards', () => {
    const deck = createDeckOfCards({ includeJokers: true });

    expect(deck).toHaveLength(54);
  });

  test('when joker deck created then deck includes high and low jokers', () => {
    const deck = createDeckOfCards({ includeJokers: true });

    expect(deck).toContainEqual<Card>(expect.objectContaining({ suite: Suite.Jokers, rank: Rank.High }));
    expect(deck).toContainEqual<Card>(expect.objectContaining({ suite: Suite.Jokers, rank: Rank.Low }));
  });

  function expectDeckToHaveCardsWithRank(deck: Array<Card>, rank: Rank, count: number) {
    expect(deck.filter(c => c.rank === rank)).toHaveLength(count);
  }

  function expectDeckToHaveCardsInSuite(deck: Array<Card>, suite: Suite, count: number) {
    expect(deck.filter(c => c.suite === suite)).toHaveLength(count);
  }
});
