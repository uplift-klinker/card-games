import { Rank, Suite } from '@card-games/deck';
import { render, screen } from '../../../testing';
import { SingleCard } from './SingleCard';
import { ModelFactory } from '../../../testing/model-factory';

describe('SingleCard', () => {
  test('when rendered then shows rank', () => {
    const card = ModelFactory.card({ rank: Rank.Ace, suite: Suite.Hearts });
    render(<SingleCard card={card} />);

    expect(screen.getByLabelText('Ace of Hearts')).toHaveTextContent('A');
    expect(screen.getByLabelText('Ace of Hearts')).not.toHaveTextContent(Rank.Ace);
  });

  test('when rendered then shows suite', () => {
    const card = ModelFactory.card({ rank: Rank.Ace, suite: Suite.Spades });
    render(<SingleCard card={card} />);

    expect(screen.getByLabelText('Ace of Spades')).toHaveTextContent('A');
  });
});
