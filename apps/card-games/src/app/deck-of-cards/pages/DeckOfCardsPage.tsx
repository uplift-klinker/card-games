import { FunctionComponent } from 'react';
import { DeckOfCardsFactory } from '@card-games/deck';
import { SingleCard } from '../components/SingleCard';

export const DeckOfCardsPage: FunctionComponent = () => {
  const deck = DeckOfCardsFactory.create();
  const cards = deck.map(card => <SingleCard key={`${card.rank}${card.suite}`} card={card} />);
  return (
    <div className={'grid grid-flow-col'} aria-label={'deck of cards'}>
      {cards}
    </div>
  );
};
