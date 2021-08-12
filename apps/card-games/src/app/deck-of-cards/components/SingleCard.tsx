import { FunctionComponent } from 'react';
import { Card } from '@card-games/deck';
import { SuiteIcon } from './SuiteIcon';

export interface SingleCardProps {
  card: Card;
}

export const SingleCard: FunctionComponent<SingleCardProps> = ({ card }) => {
  const Text = () => (
    <div className={`flex flex-1 font-bold justify-between items-center`}>
      <span>{card.shortRank}</span>
      <SuiteIcon suite={card.suite} />
    </div>
  );
  const Spacer = () => <div className={'flex flex-1'} />;

  return (
    <div
      role={'card'}
      aria-label={`${card.rank} of ${card.suite}`}
      className={'flex flex-col w-36 h-64 rounded-md border-gray-500 border p-2 m-4 shadow-md bg-gray-50'}
    >
      <div className={'flex flex-1 flex-row items-start'}>
        <Text />
        <Spacer />
        <Spacer />
      </div>
      <div className={'flex flex-1 flex-row items-center'}>
        <Spacer />
        <Text />
        <Spacer />
      </div>
      <div className={'flex flex-1 flex-row items-end'}>
        <Spacer />
        <Spacer />
        <Text />
      </div>
    </div>
  );
};
