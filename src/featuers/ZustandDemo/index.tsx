import { JSX } from 'react';

import { CardList, NameInput } from '~/featuers/ZustandDemo/components/Controls';
import styles from '~/featuers/ZustandDemo/index.module.css';

export function ZustandDemo(): JSX.Element {
  return (
    <div className={styles.container}>
      <NameInput />
      <CardList />
    </div>
  );
}
