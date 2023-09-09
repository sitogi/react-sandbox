// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { ArrayForm } from './index';

export default {
  title: 'Components/ArrayForm',
  component: ArrayForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ArrayForm>;

export const Default: StoryObj<typeof ArrayForm> = {
  name: '通常表示',
};
