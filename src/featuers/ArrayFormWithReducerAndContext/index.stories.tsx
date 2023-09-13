// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { ArrayFormWithReducerAndContext } from './index';

export default {
  title: 'Components/ArrayFormWithReducerAndContext',
  component: ArrayFormWithReducerAndContext,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ArrayFormWithReducerAndContext>;

export const Default: StoryObj<typeof ArrayFormWithReducerAndContext> = {
  name: '通常表示',
};
