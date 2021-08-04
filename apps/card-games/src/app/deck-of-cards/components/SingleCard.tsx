import { FunctionComponent } from 'react';
import { Card } from '@card-games/deck';

export interface SingleCardProps {
  card: Card;
}
export const SingleCard: FunctionComponent<SingleCardProps> = ({ card }) => {
  return (
    <div aria-label={`${card.rank} of ${card.suite}`} className={'grid grid-cols-3 w-32 h-64'}>
      <div>
        {card.rank} {card.suite}
      </div>
      <div /> <div />
      <div />
      <div>
        {card.rank} {card.suite}
      </div>
      <div />
      <div />
      <div />
      <div>
        {card.rank} {card.suite}
      </div>
    </div>
  );
};
