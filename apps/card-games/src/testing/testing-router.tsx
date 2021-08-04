import { FunctionComponent } from 'react';
import { MemoryRouter, MemoryRouterProps, Router, RouterProps } from 'react-router-dom';

export type TestingRouterProps = Partial<RouterProps> & Partial<MemoryRouterProps> & { currentRoute?: string };
export const TestingRouter: FunctionComponent<TestingRouterProps> = props => {
  if (props.history) {
    return <Router history={props.history} {...props} />;
  }

  const entries = props.initialEntries || [props.currentRoute || '/'];
  const index = props.initialIndex || 0;
  return <MemoryRouter initialEntries={entries} initialIndex={index} {...props} />;
};
