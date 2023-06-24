// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { HorizontallyResizableLayout } from '~/featuers/Resizable/HorizontallyResizableLayout';
import { defaultMain } from '~/featuers/Resizable/HorizontallyResizableLayout/defaultProps';
import { defaultBottom, defaultUp } from '~/featuers/Resizable/VerticallyResizableLayout/defaultProps';
import { VerticallyResizableLayout } from '~/featuers/Resizable/VerticallyResizableLayout/index';

export default {
  title: 'Components/VerticallyResizableLayout',
  component: VerticallyResizableLayout,
  parameters: {
    layout: 'centered',
  },
  args: { up: defaultUp, bottom: defaultBottom },
} satisfies Meta<typeof VerticallyResizableLayout>;

export const Default: StoryObj<typeof VerticallyResizableLayout> = {
  name: '通常表示',
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', height: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithHorizontallyResizable: StoryObj<typeof VerticallyResizableLayout> = {
  name: 'HorizontallyResizable と組み合わせる',
  decorators: [
    (Story) => (
      <div style={{ width: '1000px', height: '700px' }}>
        <HorizontallyResizableLayout aside={<Story />} main={defaultMain}></HorizontallyResizableLayout>
      </div>
    ),
  ],
};
