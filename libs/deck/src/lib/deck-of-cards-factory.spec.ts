import { DeckOfCardsFactory } from './deck-of-cards-factory';
import { Card, Rank, Suite } from './models';

describe('DeckOfCardsFactory', () => {
  test('when standard deck created then deck has 52 cards', () => {
    const deck = DeckOfCardsFactory.create();

    expect(deck).toHaveLength(52);
  });

  test('when standard deck created then deck has 13 cards in each suite', () => {
    const deck = DeckOfCardsFactory.create();

    expectDeckToHaveCardsInSuite(deck, Suite.Spades, 13);
    expectDeckToHaveCardsInSuite(deck, Suite.Clubs, 13);
    expectDeckToHaveCardsInSuite(deck, Suite.Hearts, 13);
    expectDeckToHaveCardsInSuite(deck, Suite.Diamonds, 13);
  });

  test('when standard deck created then deck has 4 cards in each rank', () => {
    const deck = DeckOfCardsFactory.create();

    expectDeckToHaveCardsWithRank(deck, Rank.One, 4);
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
    const deck = DeckOfCardsFactory.create({ includeJokers: true });

    expect(deck).toHaveLength(54);
  });

  test('when joker deck created then deck includes high and low jokers', () => {
    const deck = DeckOfCardsFactory.create({ includeJokers: true });

    expect(deck).toContainEqual<Card>({ suite: Suite.Jokers, rank: Rank.High });
    expect(deck).toContainEqual<Card>({ suite: Suite.Jokers, rank: Rank.Low });
  });

  function expectDeckToHaveCardsWithRank(deck: Array<Card>, rank: Rank, count: number) {
    expect(deck.filter(c => c.rank === rank)).toHaveLength(count);
  }

  function expectDeckToHaveCardsInSuite(deck: Array<Card>, suite: Suite, count: number) {
    expect(deck.filter(c => c.suite === suite)).toHaveLength(count);
  }
});
