import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { App } from './app';

describe('App', () => {
  test('when rendered then shows card game selections', () => {
    render(<App />);

    expect(screen.getByLabelText('game selection')).toBeVisible();
  });
});
