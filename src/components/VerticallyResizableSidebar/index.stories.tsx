import { Box } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VerticallyResizableSidebar } from '~/components/VerticallyResizableSidebar';

export default {
  title: 'Components/VerticallyResizableSidebar',
  component: VerticallyResizableSidebar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VerticallyResizableSidebar>;

const Template: ComponentStory<typeof VerticallyResizableSidebar> = () => (
  <Box w="300px">
    <VerticallyResizableSidebar />
  </Box>
);

export const Default = Template.bind({});
