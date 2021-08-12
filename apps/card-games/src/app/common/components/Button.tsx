import { ButtonHTMLAttributes, FunctionComponent } from 'react';

export const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return <button className={'bg-blue-600 text-white rounded-md m-2 pl-8 pr-8'} {...props} />;
};
