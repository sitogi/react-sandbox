// noinspection JSUnusedGlobalSymbols

import { Box, VStack } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AccordionByDetailsTag } from '~/components/AccordionByDetailsTag';

export default {
  title: 'Components/AccordionByDetailsTag',
  component: AccordionByDetailsTag,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/AccordionByDetailsTag/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof AccordionByDetailsTag>;

const Template: ComponentStory<typeof AccordionByDetailsTag> = () => (
  <Box w="300px" h="300px">
    <AccordionByDetailsTag summaryText="サマリーテキストです">
      <VStack mt={2} align="stretch">
        <Box p={2} bg="blue.100">
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
);

export const Default = Template.bind({});
Default.args = {
  summaryText: 'サマリーテキストです',
};
