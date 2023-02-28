import styles from './index.module.css';

interface Props {
  onPointerDown: () => void;
  isVertical?: boolean;
}

export const ResizeBoundaryDivider = ({ onPointerDown, isVertical = false }: Props): JSX.Element => {
  return (
    <div
      className={`${styles.divider} ${isVertical ? styles.vertical : styles.horizontal}`}
      onPointerDown={onPointerDown}
    >
      <div className={styles['grep-point']} />
    </div>
  );
};
