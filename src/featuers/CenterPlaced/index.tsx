import { ReactNode } from 'react';

import styles from './index.module.css';

export const CenterPlaced = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={styles.centerPlaced}>{children}</div>;
};
