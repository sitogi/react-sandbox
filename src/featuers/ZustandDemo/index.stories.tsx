// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { ZustandDemo } from './index';

export default {
  title: 'Components/SurveyForm',
  component: ZustandDemo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ZustandDemo>;

export const Default: StoryObj<typeof ZustandDemo> = {
  name: '通常表示',
};
