import { JSX, ReactNode } from 'react';

import styles from './index.module.css';

export const VStack = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={styles.vStack}>{children}</div>;
};
