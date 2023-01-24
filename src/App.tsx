import { Box, List, ListItem } from '@chakra-ui/react';

import { MyAccordion } from '~/components/MyAccordion';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

export function App() {
  return (
    <ScreenCenterPlaced>
      <Box w="200px" h="200px">
        <MyAccordion summaryText="サマリーです">
          <List pl="1.5rem">
            <ListItem>てすと 1</ListItem>
            <ListItem>てすと 2</ListItem>
            <ListItem>てすと 3</ListItem>
            <ListItem>てすと 4</ListItem>
            <ListItem>てすと 5</ListItem>
          </List>
        </MyAccordion>
      </Box>
    </ScreenCenterPlaced>
  );
}
