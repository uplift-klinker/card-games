import { render, screen } from '../../../testing';
import { DeckOfCardsPage } from './DeckOfCardsPage';
import { Rank, Suite } from '@card-games/deck';

describe('DeckOfCardsPage', () => {
  test('when rendered then shows a deck of cards', () => {
    render(<DeckOfCardsPage />);

    expect(screen.getByLabelText(`${Rank.Ace} of ${Suite.Spades}`)).toBeVisible();
  });
});
