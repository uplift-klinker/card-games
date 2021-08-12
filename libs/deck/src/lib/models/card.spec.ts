import { createCard } from './card';
import { Rank } from './rank';
import { Suite } from './suite';
import { CardColor } from './card-color';

describe('Card', () => {
  test('when card is king then short rank is "K"', () => {
    const card = createCard({ suite: Suite.Diamonds, rank: Rank.King });

    expect(card.shortRank).toEqual('K');
  });

  test('when card is queen then short rank is "Q"', () => {
    const card = createCard({ suite: Suite.Diamonds, rank: Rank.Queen });

    expect(card.shortRank).toEqual('Q');
  });

  test('when card is jack then short rank is "J"', () => {
    const card = createCard({ suite: Suite.Diamonds, rank: Rank.Jack });

    expect(card.shortRank).toEqual('J');
  });

  test('when card is ace then short rank is "A"', () => {
    const card = createCard({ suite: Suite.Diamonds, rank: Rank.Ace });

    expect(card.shortRank).toEqual('A');
  });

  test('when card is numeric rank then short rank is number', () => {
    const card = createCard({ suite: Suite.Diamonds, rank: Rank.Two });

    expect(card.shortRank).toEqual('2');
  });

  test('when card is diamonds then color is red', () => {
    const card = createCard({ suite: Suite.Diamonds, rank: Rank.Ace });

    expect(card.color).toEqual(CardColor.Red);
  });

  test('when card is hearts then color is red', () => {
    const card = createCard({ suite: Suite.Hearts, rank: Rank.King });

    expect(card.color).toEqual(CardColor.Red);
  });

  test('when card is spades then color is black', () => {
    const card = createCard({ suite: Suite.Spades, rank: Rank.King });

    expect(card.color).toEqual(CardColor.Black);
  });

  test('when card is clubs then color is black', () => {
    const card = createCard({ suite: Suite.Clubs, rank: Rank.King });

    expect(card.color).toEqual(CardColor.Black);
  });

  test('when card is joker then color is joker', () => {
    const card = createCard({ suite: Suite.Jokers, rank: Rank.Low });

    expect(card.color).toEqual(CardColor.Joker);
  });
});
