import { FunctionComponent } from 'react';

export const Toolbar: FunctionComponent = ({ children }) => {
  return <div className={'flex h-16 flex-row shadow-lg pl-4 pr-4 bg-gray-200'}>{children}</div>;
};
