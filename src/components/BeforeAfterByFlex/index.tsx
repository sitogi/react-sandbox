import { Box, SystemStyleObject } from '@chakra-ui/react';

const decorationStyleObject: SystemStyleObject = {
  content: '"★★"',
  color: 'gold',
  fontSize: '1.5rem',
};

interface Props {
  decorationGapPx?: number;
}

// after (before) 疑似要素を position ではなく display:flex で調整する
export const BeforeAfterByFlex = ({ decorationGapPx = 10 }: Props): JSX.Element => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={decorationGapPx}
      _before={decorationStyleObject}
      _after={decorationStyleObject}
    >
      Using flex to align before and after pseudo-elements.
    </Box>
  );
};
