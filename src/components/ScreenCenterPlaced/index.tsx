import './index.css';
import { ReactNode } from 'react';

export const ScreenCenterPlaced = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className="container">{children}</div>;
};
