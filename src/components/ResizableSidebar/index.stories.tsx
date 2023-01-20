import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ResizableSidebar } from '~/components/ResizableSidebar';

export default {
  title: 'Components/ResizableSidebar',
  component: ResizableSidebar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ResizableSidebar>;

const Template: ComponentStory<typeof ResizableSidebar> = () => <ResizableSidebar />;

export const Default = Template.bind({});
