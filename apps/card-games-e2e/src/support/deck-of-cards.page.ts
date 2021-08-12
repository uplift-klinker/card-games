const navigate = () => cy.visit('/');
const findAllCards = () => cy.findAllByRole('card');
const shuffleCards = () => cy.findByRole('button', { name: 'shuffle deck' }).click();

export const DeckOfCardsPage = {
  navigate,
  findAllCards,
  shuffleCards
};
