// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { ReactGridLayoutDemo } from '~/featuers/ReactGridLayoutDemo/index';

export default {
  title: 'Components/ReactGridLayoutDemo',
  component: ReactGridLayoutDemo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1000px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ReactGridLayoutDemo>;

type Story = StoryObj<typeof ReactGridLayoutDemo>;

export const Default: Story = {
  name: '通常表示',
};
