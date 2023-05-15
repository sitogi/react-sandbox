import styles from './index.module.css';

interface Props {
  decorationGap?: 'gapSm' | 'gapMd' | 'gapLg';
}

// after (before) 疑似要素を position ではなく display:flex で調整する
export const BeforeAfterByFlex = ({ decorationGap = 'gapMd' }: Props): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles[decorationGap]}`}>
      Using flex to align before and after pseudo-elements.
    </div>
  );
};