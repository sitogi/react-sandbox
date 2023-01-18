import React, { useEffect, useRef, useState } from 'react';

import { Box, Flex, Grid } from '@chakra-ui/react';
import { css } from '@emotion/react';

const divider = css`
  margin-left: 10px;
  margin-right: 10px;
  width: 3px;
  height: 100%;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: black;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: black;
  cursor: ew-resize;
  user-select: none;
`;

const ASIDE_MIN_SIZE = 100;
const ASIDE_MAX_SIZE = 600;

export const ResizableSidebar = (): JSX.Element => {
  const isMousePressedRef = useRef(false);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [leftW, setLeftW] = useState(200);

  useEffect(() => {
    const mouseUpListener = () => {
      isMousePressedRef.current = false;
    };
    const mouseMoveListener = (event: MouseEvent) => {
      const x = event.x;

      if (isMousePressedRef.current) {
        if (dividerRef.current) {
          if (x < ASIDE_MIN_SIZE) {
            setLeftW(ASIDE_MIN_SIZE);
          } else {
            if (x > ASIDE_MAX_SIZE) {
              setLeftW(ASIDE_MAX_SIZE);
            } else {
              setLeftW(x);
            }
          }
        }
      }
    };

    document.addEventListener('mouseup', mouseUpListener);
    document.addEventListener('mousemove', mouseMoveListener);

    return () => {
      document.removeEventListener('mouseup', mouseUpListener);
      document.removeEventListener('mousemove', mouseMoveListener);
    };
  }, []);

  return (
    <Flex w="100vw" h="100vh">
      <Grid w={`${leftW}px`} h="100%" placeContent="center" fontSize="4xl" bg="green.100">
        Aside
      </Grid>
      <Box
        ref={dividerRef}
        css={divider}
        onMouseDown={() => {
          isMousePressedRef.current = true;
        }}
      />
      <Grid w={`calc(100vw - ${leftW}px)`} h="100%" placeContent="center" fontSize="4xl" bg="purple.100">
        Main
      </Grid>
    </Flex>
  );
};
