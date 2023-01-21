import { useEffect, useRef } from 'react';

import { Flex, Grid } from '@chakra-ui/react';

import { HorizontalDivider } from '~/components/VerticallyResizableLayout/HorizontalDivider';

const HEADER_SIZE = 80;
const FIRST_AREA_INITIAL_SIZE = 300;
const FIRST_AREA_MIN_SIZE = 200;
const FIRST_AREA_MAX_SIZE = 800;

export const VerticallyResizableLayout = (): JSX.Element => {
  const isMousePressedRef = useRef(false);
  const resizeTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseUpListener = () => {
      isMousePressedRef.current = false;
    };
    const mouseMoveListener = (event: MouseEvent) => {
      const y = event.y;

      if (isMousePressedRef.current && resizeTargetRef.current !== null) {
        if (y < FIRST_AREA_MIN_SIZE) {
          resizeTargetRef.current.style.height = `${FIRST_AREA_MIN_SIZE - HEADER_SIZE}px`;
        } else if (y > FIRST_AREA_MAX_SIZE) {
          resizeTargetRef.current.style.height = `${FIRST_AREA_MAX_SIZE - HEADER_SIZE}px`;
        } else {
          resizeTargetRef.current.style.height = `${y - HEADER_SIZE}px`;
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
    <Flex w="full" h="100vh" direction="column">
      <Grid
        placeContent="center"
        w="full"
        bgColor="red.100"
        borderBottom="solid 4px"
        flex={`0 0 ${HEADER_SIZE}px`}
        fontSize="4xl"
      >
        App Title
      </Grid>
      <Grid
        ref={resizeTargetRef}
        h={`${FIRST_AREA_INITIAL_SIZE}px`}
        w="full"
        placeContent="center"
        fontSize="4xl"
        bg="green.100"
      >
        Category A
      </Grid>
      <HorizontalDivider onMouseDown={() => (isMousePressedRef.current = true)} />
      <Grid w="full" flex="1 1" placeContent="center" fontSize="4xl" bg="yellow.100">
        Category B
      </Grid>
    </Flex>
  );
};
