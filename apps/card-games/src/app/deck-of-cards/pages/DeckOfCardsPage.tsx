import { FunctionComponent, useCallback, useState } from 'react';
import { createDeckOfCards, shuffleDeck } from '@card-games/deck';
import { SingleCard } from '../components/SingleCard';
import { Toolbar } from '../../common/components/Toolbar';
import { Button } from '../../common/components/Button';

export const DeckOfCardsPage: FunctionComponent = () => {
  const [deck, setDeck] = useState(createDeckOfCards);
  const handleShuffle = useCallback(() => setDeck(shuffleDeck(deck)), [deck, setDeck]);
  const cards = deck.map((card, index) => <SingleCard key={index} card={card} />);
  return (
    <div className={'flex flex-1 flex-col'}>
      <Toolbar>
        <Button onClick={handleShuffle} aria-label={'shuffle deck'}>
          Shuffle
        </Button>
      </Toolbar>
      <div className={'flex flex-1 flex-wrap flex-row'} aria-label={'deck of cards'}>
        {cards}
      </div>
    </div>
  );
};
