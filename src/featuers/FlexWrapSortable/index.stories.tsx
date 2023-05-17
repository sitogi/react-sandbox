// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { FlexWrapSortable } from './index';

export default {
  title: 'Components/FlexWrapSortable',
  component: FlexWrapSortable,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FlexWrapSortable>;

type Story = StoryObj<typeof FlexWrapSortable>;

export const Default: Story = {
  name: '通常表示',
};
