// noinspection JSUnusedGlobalSymbols

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { VerticallyResizableLayout } from '~/featuers/Resizable/VerticallyResizableLayout/index';

export default {
  title: 'Components/VerticallyResizableLayout',
  component: VerticallyResizableLayout,
  parameters: {
    layout: 'centered',
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
    <div style={{ width: '1000px', height: '700px' }}>
      <Story />
    </div>
  ),
];

export const SidebarLike = Template.bind({});
SidebarLike.decorators = [
  (Story) => (
    <div style={{ width: '300px', height: '700px' }}>
      <Story />
    </div>
  ),
];
