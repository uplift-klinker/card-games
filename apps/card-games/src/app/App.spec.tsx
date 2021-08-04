import { render, screen } from '../testing';
import { App } from './App';

describe('App', () => {
  test('when rendered then shows a deck of cards', () => {
    render(<App />);

    expect(screen.getByLabelText('deck of cards')).toBeVisible();
  });
});
