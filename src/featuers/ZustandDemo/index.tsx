import { JSX } from 'react';

import { BearControls } from '~/featuers/ZustandDemo/components/BearControls';
import { BearCounter } from '~/featuers/ZustandDemo/components/BearCounter';
import styles from '~/featuers/ZustandDemo/index.module.css';

export function ZustandDemo(): JSX.Element {
  return (
    <div className={styles.container}>
      <BearCounter />
      <BearControls />
    </div>
  );
}
