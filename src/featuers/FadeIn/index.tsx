import { JSX, ReactNode } from 'react';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
};

export const FadeIn = ({ children }: Props): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
