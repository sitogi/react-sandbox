// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { SurveyForm } from './index';

export default {
  title: 'Components/SurveyForm',
  component: SurveyForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SurveyForm>;

export const Default: StoryObj<typeof SurveyForm> = {
  name: '通常表示',
};
