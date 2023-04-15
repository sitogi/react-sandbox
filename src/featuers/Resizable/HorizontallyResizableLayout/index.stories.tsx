// noinspection JSUnusedGlobalSymbols

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HorizontallyResizableLayout } from '~/featuers/Resizable/HorizontallyResizableLayout/index';
import { VerticallyResizableLayout } from '~/featuers/Resizable/VerticallyResizableLayout';

const Template: StoryFn<typeof HorizontallyResizableLayout> = (args) => (
  <div style={{ width: '1000px', height: '500px' }}>
    <HorizontallyResizableLayout {...args} />
  </div>
);

export default {
  title: 'Components/HorizontallyResizableLayout',
  component: Template,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'https://github.com/sitogi/react-sandbox/blob/main/src/components/Resizable/HorizontallyResizableLayout/index.tsx',
      },
    },
  },
} as Meta<typeof HorizontallyResizableLayout>;

export const Default: StoryObj<typeof Template> = {
  name: '通常表示',
};

export const WithVerticallyResizableSidebar: StoryObj<typeof Template> = {
  name: 'VerticallyResizable と組み合わせる',
  args: {
    aside: (
      <div style={{ height: '500px' }}>
        <VerticallyResizableLayout />
      </div>
    ),
  },
};
