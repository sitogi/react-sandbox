import { Grid } from '@chakra-ui/react';

import { HorizontallyResizableLayout } from '~/components/HorizontallyResizableLayout';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

export function App() {
  return (
    <ScreenCenterPlaced>
      <HorizontallyResizableLayout
        aside={
          <Grid w="full" placeContent="center" fontSize="4xl" bg="green.100">
            Aside
          </Grid>
        }
        main={
          <Grid w="full" placeContent="center" fontSize="4xl" bg="purple.100">
            Main
          </Grid>
        }
      />
    </ScreenCenterPlaced>
  );
}
