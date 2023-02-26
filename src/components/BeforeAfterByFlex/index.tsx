import styles from './index.module.scss';

interface Props {
  decorationGap?: 'gap-sm' | 'gap-md' | 'gap-lg';
}

// after (before) 疑似要素を position ではなく display:flex で調整する
export const BeforeAfterByFlex = ({ decorationGap = 'gap-md' }: Props): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles[decorationGap]}`}>
      Using flex to align before and after pseudo-elements.
    </div>
  );
};
