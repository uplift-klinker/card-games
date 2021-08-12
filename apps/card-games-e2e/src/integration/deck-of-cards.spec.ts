import { DeckOfCardsPage } from '../support/deck-of-cards.page';

describe('deck of cards', () => {
  beforeEach(() => {
    DeckOfCardsPage.navigate();
  });

  it('should show deck of cards', () => {
    DeckOfCardsPage.findAllCards().should('have.length', 52);
  });

  it('should shuffle the deck of cards', () => {
    DeckOfCardsPage.shuffleCards();

    DeckOfCardsPage.findAllCards().should('have.length', 52);
  });
});
