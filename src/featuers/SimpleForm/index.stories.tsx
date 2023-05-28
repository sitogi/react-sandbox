// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { SimpleForm } from './index';

export default {
  title: 'Components/SimpleForm',
  component: SimpleForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SimpleForm>;

export const Default: StoryObj<typeof SimpleForm> = {
  name: '通常表示',
};
