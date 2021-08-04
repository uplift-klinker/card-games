import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { DeckOfCardsPage } from '../deck-of-cards/pages/DeckOfCardsPage';

export const APP_ROUTES = {
  home: '/'
};

export const AppRoutes: FunctionComponent = () => {
  return (
    <Route path={APP_ROUTES.home}>
      <DeckOfCardsPage />
    </Route>
  );
};
