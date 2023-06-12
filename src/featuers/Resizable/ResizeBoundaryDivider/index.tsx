import { JSX } from 'react';

import styles from './index.module.css';

type Props = {
  onPointerDown: () => void;
  resizeDirection: 'horizontal' | 'vertical';
};

export const ResizeBoundaryDivider = ({ onPointerDown, resizeDirection }: Props): JSX.Element => {
  return (
    <div className={`${styles.divider} ${styles[resizeDirection]}`} onPointerDown={onPointerDown}>
      <div className={styles.grepPoint} />
    </div>
  );
};
