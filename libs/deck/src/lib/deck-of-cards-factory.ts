import { DeckOfCards, Rank, StandardRanks, StandardSuites, Suite } from './models';

export type CreateDeckOptions = {
  includeJokers?: boolean;
};

function create({ includeJokers = false }: CreateDeckOptions = {}): DeckOfCards {
  const standardDeck = StandardSuites.flatMap(suite => StandardRanks.map(rank => ({ rank, suite })));
  if (includeJokers) {
    return [...standardDeck, { suite: Suite.Jokers, rank: Rank.High }, { suite: Suite.Jokers, rank: Rank.Low }];
  }

  return standardDeck;
}

export const DeckOfCardsFactory = {
  create
};
