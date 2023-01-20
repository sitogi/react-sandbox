import styles from '~/components/Checkbox/index.module.css';

interface Props {
  accentColor?: 'blue' | 'pink' | 'green' | 'purple';
}

export const Checkbox = ({ accentColor = 'blue' }: Props): JSX.Element => {
  return <input type="checkbox" className={styles[accentColor]} />;
};
