import { JSX } from 'react';

import styles from './index.module.css';

type Props = {
  accentColor?: 'blue' | 'yellow' | 'green' | 'purple';
};

export const CheckboxWithAccentColor = ({ accentColor = 'blue' }: Props): JSX.Element => {
  return <input type="checkbox" className={`${styles.myCheckbox} ${styles[accentColor]}`} />;
};
