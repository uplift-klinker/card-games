import { Card, createCard, CreateCardOptions, Rank, Suite } from '@card-games/deck';

function card(model: Partial<CreateCardOptions>): Card {
  const options: CreateCardOptions = {
    suite: Suite.Spades,
    rank: Rank.Ace,
    ...model
  };
  return createCard(options);
}

export const ModelFactory = {
  card
};
