import { render, screen } from '../../../testing';
import { SingleCard } from './SingleCard';
import { Rank, Suite } from '@card-games/deck';

describe('SingleCard', () => {
  test('when rendered then shows rank', () => {
    render(<SingleCard card={{ rank: Rank.Ace, suite: Suite.Hearts }} />);

    expect(screen.getByLabelText('Ace of Hearts')).toHaveTextContent('A');
  });

  test('when rendered then shows suite', () => {
    render(<SingleCard card={{ rank: Rank.Ace, suite: Suite.Spades }} />);

    expect(screen.getByLabelText('Ace of Spades')).toHaveTextContent('Spades');
  });
});
