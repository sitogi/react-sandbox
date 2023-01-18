import { Box, SystemStyleObject, VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';

import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

const decorationStyle = css`
  content: '◆';
  color: gold;
`;

const decorationStyleObject: SystemStyleObject = {
  content: '"◆"',
  color: 'gold',
};

const withDecorationStyle = css`
  display: flex;
  align-content: center;

  &::before {
    ${decorationStyle};
  }

  &::after {
    ${decorationStyle};
  }
`;

interface Props {
  decorationGapPx?: number;
}

// after (before) 疑似要素を position ではなく display:flex で調整する
export const BeforeByFlex = ({ decorationGapPx = 10 }: Props): JSX.Element => {
  return (
    <ScreenCenterPlaced>
      <VStack gap={10}>
        <Box css={[withDecorationStyle, css({ gap: decorationGapPx })]}>Emotion with String Style</Box>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: decorationGapPx,
            '&::before': decorationStyle,
            '&::after': decorationStyle,
          }}
        >
          Emotion with Object Style
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={decorationGapPx}
          _before={decorationStyleObject}
          _after={decorationStyleObject}
        >
          Chakra
        </Box>
      </VStack>
    </ScreenCenterPlaced>
  );
};
