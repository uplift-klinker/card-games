import { Rank } from './rank';
import { convertSuiteToColor, Suite } from './suite';
import { CardColor } from './card-color';

export type Card = {
  rank: Rank;
  suite: Suite;
  color: CardColor;
  shortRank: string;
};

export type CreateCardOptions = { suite: Suite; rank: Rank };

export function createCard({ suite, rank }: CreateCardOptions): Card {
  return {
    suite,
    rank,
    color: convertSuiteToColor(suite),
    shortRank: typeof rank === 'number' ? `${rank}` : rank.substr(0, 1)
  };
}
