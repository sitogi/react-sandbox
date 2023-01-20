import { Grid } from '@chakra-ui/react';

import { HorizontallyResizableLayout } from '~/components/HorizontallyResizableLayout';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';
import { VerticallyResizableSidebar } from '~/components/VerticallyResizableSidebar';

export function App() {
  return (
    <ScreenCenterPlaced>
      <HorizontallyResizableLayout
        aside={<VerticallyResizableSidebar />}
        main={
          <Grid w="full" placeContent="center" fontSize="4xl" bg="purple.100">
            Main
          </Grid>
        }
      />
    </ScreenCenterPlaced>
  );
}
