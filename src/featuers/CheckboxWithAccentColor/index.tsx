import styles from './index.module.css';

interface Props {
  accentColor?: 'blue' | 'yellow' | 'green' | 'purple';
}

export const CheckboxWithAccentColor = ({ accentColor = 'blue' }: Props): JSX.Element => {
  return <input type="checkbox" className={`${styles.myCheckbox} ${styles[accentColor]}`} />;
};
