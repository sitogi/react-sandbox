import { ReactNode } from 'react';

import styles from './index.module.scss';

export const VStack = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={styles['v-stack']}>{children}</div>;
};
