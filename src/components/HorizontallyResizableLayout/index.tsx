import { useEffect, useRef } from 'react';

import { Flex, Grid } from '@chakra-ui/react';

import { VerticalDivider } from '~/components/HorizontallyResizableLayout/VerticalDivider';

const ASIDE_INITIAL_SIZE = 350;
const ASIDE_MIN_SIZE = 200;
const ASIDE_MAX_SIZE = 500;

const defaultAside = (
  <Grid w="full" h="100vh" placeContent="center" fontSize="4xl" bg="green.100">
    Aside
  </Grid>
);

const defaultMain = (
  <Grid w="full" h="100vh" placeContent="center" fontSize="4xl" bg="purple.100">
    Main
  </Grid>
);

interface Props {
  aside?: JSX.Element;
  main?: JSX.Element;
}

export const HorizontallyResizableLayout = ({ aside = defaultAside, main = defaultMain }: Props): JSX.Element => {
  const isMousePressedRef = useRef(false);
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseUpListener = () => {
      isMousePressedRef.current = false;
    };
    const mouseMoveListener = (event: MouseEvent) => {
      const x = event.x;

      if (isMousePressedRef.current && asideRef.current !== null) {
        if (x < ASIDE_MIN_SIZE) {
          asideRef.current.style.width = `${ASIDE_MIN_SIZE}px`;
        } else if (x > ASIDE_MAX_SIZE) {
          asideRef.current.style.width = `${ASIDE_MAX_SIZE}px`;
        } else {
          asideRef.current.style.width = `${x}px`;
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
      <Grid as="aside" ref={asideRef} h="100%" w={`${ASIDE_INITIAL_SIZE}px`}>
        {aside}
      </Grid>
      <VerticalDivider onMouseDown={() => (isMousePressedRef.current = true)} />
      <Grid as="main" h="100%" flex="1 1">
        {main}
      </Grid>
    </Flex>
  );
};
