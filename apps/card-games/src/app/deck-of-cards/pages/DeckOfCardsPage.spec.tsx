import { render, screen, userEvent } from '../../../testing';
import { DeckOfCardsPage } from './DeckOfCardsPage';
import { Rank, Suite } from '@card-games/deck';

describe('DeckOfCardsPage', () => {
  test('when rendered then shows a deck of cards', () => {
    render(<DeckOfCardsPage />);

    expect(screen.getByLabelText(`${Rank.Ace} of ${Suite.Spades}`)).toBeVisible();
  });

  test('when shuffled then shuffles deck', () => {
    render(<DeckOfCardsPage />);

    const initialCards = getAllCards();
    userEvent.click(screen.getByLabelText('shuffle deck'));

    expect(getAllCards()).not.toEqual(initialCards);
  });

  function getAllCards(): string {
    return screen
      .getAllByRole('card')
      .map(element => element.textContent || '')
      .reduce((text, value) => text + value, '');
  }
});
