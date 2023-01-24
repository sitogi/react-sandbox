import { ReactNode, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

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
      transition: background-color 0.2s;
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

export const MyAccordion = ({ summaryText, children }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box css={style}>
      <Box as="details" open={isOpen}>
        <Box
          as="summary"
          onClick={(event) => {
            event.preventDefault();
            setIsOpen((prevState) => !prevState);
          }}
        >
          {summaryText}
        </Box>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: '-10%' },
          }}
        >
          {children}
        </motion.div>
      </Box>
    </Box>
  );
};
