import { Box, VStack } from '@chakra-ui/react';

import { AccordionByDetailsTag } from '~/components/AccordionByDetailsTag';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

export function App() {
  return (
    <ScreenCenterPlaced>
      <Box w="300px" h="300px">
        <AccordionByDetailsTag summaryText="サマリーテキストです">
          <VStack mt={2} align="stretch">
            <Box p={2} bg="blue.50">
              てすと 1
            </Box>
            <Box p={2} bg="blue.50">
              てすと 2
            </Box>
            <Box p={2} bg="blue.50">
              てすと 3
            </Box>
            <Box p={2} bg="blue.50">
              てすと 4
            </Box>
            <Box p={2} bg="blue.50">
              てすと 5
            </Box>
          </VStack>
        </AccordionByDetailsTag>
      </Box>
    </ScreenCenterPlaced>
  );
}
