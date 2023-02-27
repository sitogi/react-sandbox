import styles from '~/components/CheckboxWithAccentColor/index.module.scss';

interface Props {
  accentColor?: 'blue' | 'yellow' | 'green' | 'purple';
}

export const CheckboxWithAccentColor = ({ accentColor = 'blue' }: Props): JSX.Element => {
  return <input type="checkbox" className={`${styles['my-checkbox']} ${styles[accentColor]}`} />;
};
