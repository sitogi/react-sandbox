import { useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';

const divider = css`
  align-items: center;
  background: gray;
  cursor: row-resize;
  height: 6px;
  justify-content: center;
  user-select: none; /* ドラッグ中に他領域が選択されるのを抑制 */
  width: 100%;

  &:hover,
  &.highlight {
    background: #62acf5;
    transition: background 0.2s ease-in;
  }
`;

interface Props {
  onMouseDown: () => void;
}

export const HorizontalDivider = ({ onMouseDown }: Props): JSX.Element => {
  // ドラッグ中にバーからカーソルがずれてもハイライトしたままにしておくために利用
  const [isPressed, setIsPressed] = useState(false);

  // マウスアップした際にバーからカーソルがずれてても効くように、マウスアップリスナーはドキュメント全体に張る
  useEffect(() => {
    const onMouseUp = () => {
      setIsPressed(false);
    };

    if (isPressed) {
      document.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isPressed, setIsPressed]);

  return (
    <Flex
      css={divider}
      className={isPressed ? 'highlight' : ''}
      onMouseDown={() => {
        onMouseDown();
        setIsPressed(true);
      }}
    >
      <Box w="40px" h="10px" bg="red.300" position="absolute" rounded="md" />
    </Flex>
  );
};
