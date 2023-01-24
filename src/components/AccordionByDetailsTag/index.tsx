import { ReactNode, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { motion, useAnimation } from 'framer-motion';

interface Props {
  summaryText: string;
  children: ReactNode;
}

const style = css`
  height: 100%;
  width: 100%;

  summary {
    align-items: center;
    display: flex;
    gap: 0.6rem;
    list-style: none;
    padding: 0.6rem;
    user-select: none;

    &:hover {
      background-color: #e1dede;
      cursor: pointer;
      transition: background-color 0.4s;
    }

    &:before {
      content: '▶';
      font-size: 1.4rem;
    }
  }

  details[open] summary:before {
    content: '▼';
  }
`;

export const AccordionByDetailsTag = ({ summaryText, children }: Props): JSX.Element => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const controls = useAnimation();

  return (
    <Box css={style}>
      <Box as="details" open={detailsOpen}>
        <Box
          as="summary"
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
        </Box>
        <motion.div animate={controls}>{children}</motion.div>
      </Box>
    </Box>
  );
};
