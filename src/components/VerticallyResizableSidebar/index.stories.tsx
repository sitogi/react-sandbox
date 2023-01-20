import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VerticallyResizableSidebar } from '~/components/VerticallyResizableSidebar';

export default {
  title: 'Components/VerticallyResizableSidebar',
  component: VerticallyResizableSidebar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VerticallyResizableSidebar>;

const Template: ComponentStory<typeof VerticallyResizableSidebar> = () => <VerticallyResizableSidebar />;

export const Default = Template.bind({});
