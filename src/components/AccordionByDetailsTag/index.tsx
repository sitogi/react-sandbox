import { ReactNode, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

import styles from './index.module.scss';

interface Props {
  summaryText: string;
  children: ReactNode;
}

export const AccordionByDetailsTag = ({ summaryText, children }: Props): JSX.Element => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const controls = useAnimation();

  return (
    <div className={styles.container}>
      <details open={detailsOpen}>
        <summary
          onClick={async (event) => {
            event.preventDefault();
            // details タグの open 属性を消すと詳細が即座に消えてしまう。
            // そのため閉じる歳はアニメーション実行後に open 属性を削除する。
            if (!detailsOpen) {
              setDetailsOpen(true);
              await controls.start({ opacity: [0, 1], y: [-10, 0], transition: { duration: 0.1 } });
            } else {
              await controls.start({ opacity: [1, 0], y: [0, -10], transition: { duration: 0.1 } });
              setDetailsOpen(false);
            }
          }}
        >
          {summaryText}
        </summary>
        <motion.div animate={controls}>{children}</motion.div>
      </details>
    </div>
  );
};
