import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { TestingRouter } from './testing-router';

function render(ui: ReactElement): ReturnType<typeof rtlRender> {
  return rtlRender(<TestingRouter>{ui}</TestingRouter>);
}

export { userEvent, screen, render };
