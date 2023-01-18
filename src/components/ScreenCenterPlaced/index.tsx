import { ReactNode } from 'react';

import { Grid } from '@chakra-ui/react';

export const ScreenCenterPlaced = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Grid placeContent="center" h="100vh" w="100vw">
      {children}
    </Grid>
  );
};
