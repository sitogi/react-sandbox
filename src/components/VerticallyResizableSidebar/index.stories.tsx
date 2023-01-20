import { Box } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VerticallyResizableSidebar } from '~/components/VerticallyResizableSidebar';

export default {
  title: 'Components/VerticallyResizableSidebar',
  component: VerticallyResizableSidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'https://github.com/sitogi/react-sandbox/blob/main/src/components/VerticallyResizableSidebar/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof VerticallyResizableSidebar>;

const Template: ComponentStory<typeof VerticallyResizableSidebar> = () => (
  <Box w="300px" h="100%">
    <VerticallyResizableSidebar />
  </Box>
);

export const Default = Template.bind({});
