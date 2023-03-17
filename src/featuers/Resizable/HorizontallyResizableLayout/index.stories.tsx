// noinspection JSUnusedGlobalSymbols

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HorizontallyResizableLayout } from '~/featuers/Resizable/HorizontallyResizableLayout/index';
import { VerticallyResizableLayout } from '~/featuers/Resizable/VerticallyResizableLayout';

export default {
  title: 'Components/HorizontallyResizableLayout',
  component: HorizontallyResizableLayout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'https://github.com/sitogi/react-sandbox/blob/main/src/components/Resizable/HorizontallyResizableLayout/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof HorizontallyResizableLayout>;

const Template: ComponentStory<typeof HorizontallyResizableLayout> = (args) => (
  <div style={{ width: '1000px', height: '500px' }}>
    <HorizontallyResizableLayout {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithVerticallyResizableSidebar = Template.bind({});
WithVerticallyResizableSidebar.args = {
  aside: (
    <div style={{ height: '500px' }}>
      <VerticallyResizableLayout />
    </div>
  ),
};
