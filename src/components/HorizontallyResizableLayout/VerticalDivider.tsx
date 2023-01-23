import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';

const divider = css`
  align-items: center;
  background: gray;
  cursor: ew-resize;
  height: 100%;
  justify-content: center;
  user-select: none; /* ドラッグ中に他領域が選択されるのを抑制する */
  touch-action: none; /* スマホタッチで pointermove がすぐ中断されないようにする (see: https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not) */
  width: 6px;

  /* active 疑似要素はタッチデバイスでは反応しないためハイライトされない */
  /* hover 疑似要素はタッチ終了後にハイライトが解除されない問題などがあるが一旦妥協している */
  &:active,
  &:hover {
    background: #62acf5;
    transition: background 0.2s ease-in;
  }
`;

interface Props {
  onPointerDown: () => void;
}

export const VerticalDivider = ({ onPointerDown }: Props): JSX.Element => {
  return (
    <Flex css={divider} onPointerDown={onPointerDown}>
      <Box w="10px" h="60px" bg="red.300" position="absolute" rounded="md" />
    </Flex>
  );
};
