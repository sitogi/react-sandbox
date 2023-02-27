import { Box } from '@chakra-ui/react';

import { AccordionByDetailsTag } from '~/components/AccordionByDetailsTag';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';
import { VStack } from '~/components/VStack';

export function App() {
  return (
    <ScreenCenterPlaced>
      <Box w="300px" h="300px">
        <AccordionByDetailsTag summaryText="サマリーテキストです">
          <VStack>
            <Box mt={2} p={2} bg="blue.100">
              てすと 1
            </Box>
            <Box p={2} bg="blue.100">
              てすと 2
            </Box>
            <Box p={2} bg="blue.100">
              てすと 3
            </Box>
            <Box p={2} bg="blue.100">
              てすと 4
            </Box>
            <Box p={2} bg="blue.100">
              てすと 5
            </Box>
          </VStack>
        </AccordionByDetailsTag>
      </Box>
    </ScreenCenterPlaced>
  );
}
