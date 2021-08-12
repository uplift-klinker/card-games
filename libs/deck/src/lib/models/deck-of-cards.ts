import { Card, createCard } from './card';
import { StandardSuites, Suite } from './suite';
import { Rank, StandardRanks } from './rank';

export type DeckOfCards = Array<Card>;

export type CreateDeckOptions = {
  includeJokers?: boolean;
};

export function createDeckOfCards({ includeJokers = false }: CreateDeckOptions = {}): DeckOfCards {
  const standardDeck = StandardSuites.flatMap(suite => StandardRanks.map(rank => createCard({ rank, suite })));

  const jokers = [
    createCard({ suite: Suite.Jokers, rank: Rank.High }),
    createCard({ suite: Suite.Jokers, rank: Rank.Low })
  ];

  if (includeJokers) {
    return [...standardDeck, ...jokers];
  }

  return standardDeck;
}
