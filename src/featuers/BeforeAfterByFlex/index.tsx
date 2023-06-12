import { JSX } from 'react';

import styles from './index.module.css';

type Props = {
  decorationGap?: 'gapSm' | 'gapMd' | 'gapLg';
};

export const BeforeAfterByFlex = ({ decorationGap = 'gapMd' }: Props): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles[decorationGap]}`}>
      Using flex to align before and after pseudo-elements.
    </div>
  );
};
