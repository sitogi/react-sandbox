import { Box } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VerticallyResizableLayout } from '~/components/Resizable/VerticallyResizableLayout/index';

export default {
  title: 'Components/VerticallyResizableLayout',
  component: VerticallyResizableLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'https://github.com/sitogi/react-sandbox/blob/main/src/components/Resizable/VerticallyResizableSidebar/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof VerticallyResizableLayout>;

const Template: ComponentStory<typeof VerticallyResizableLayout> = () => <VerticallyResizableLayout />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <Box w="100vw">
      <Story />
    </Box>
  ),
];

export const SidebarLike = Template.bind({});
SidebarLike.decorators = [
  (Story) => (
    <Box w="300px">
      <Story />
    </Box>
  ),
];
