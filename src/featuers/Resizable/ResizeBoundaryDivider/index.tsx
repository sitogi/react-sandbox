import styles from './index.module.css';

interface Props {
  onPointerDown: () => void;
  resizeDirection: 'horizontal' | 'vertical';
}

export const ResizeBoundaryDivider = ({ onPointerDown, resizeDirection }: Props): JSX.Element => {
  return (
    <div className={`${styles.divider} ${styles[resizeDirection]}`} onPointerDown={onPointerDown}>
      <div className={styles['grep-point']} />
    </div>
  );
};
