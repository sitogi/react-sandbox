// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { HorizontallyResizableLayout } from '~/featuers/Resizable/HorizontallyResizableLayout/index';
import { QueryContainer } from '~/featuers/Resizable/QueryContainer';
import { VerticallyResizableLayout } from '~/featuers/Resizable/VerticallyResizableLayout';

export default {
  title: 'Components/HorizontallyResizableLayout',
  component: HorizontallyResizableLayout,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', height: '500px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HorizontallyResizableLayout>;

type Story = StoryObj<typeof HorizontallyResizableLayout>;

export const Default: Story = {
  name: '通常表示',
};

export const WithVerticallyResizableSidebar: Story = {
  name: 'VerticallyResizable と組み合わせる',
  args: {
    aside: (
      <div style={{ height: '500px' }}>
        <VerticallyResizableLayout />
      </div>
    ),
  },
};

export const WithContainerQuery: Story = {
  name: 'コンテナクエリと組み合わせる',
  args: {
    aside: <QueryContainer />,
  },
};
