// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { CheckboxWithAccentColor } from '~/featuers/CheckboxWithAccentColor';

export default {
  title: 'Components/CheckboxWithAccentColor',
  component: CheckboxWithAccentColor,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/Checkbox/index.tsx',
      },
    },
  },
} as Meta<typeof CheckboxWithAccentColor>;

export const Default: StoryObj<typeof CheckboxWithAccentColor> = {
  name: '通常表示',
};

export const Purple: StoryObj<typeof CheckboxWithAccentColor> = {
  name: 'むらさき',
  args: {
    accentColor: 'purple',
  },
};

export const Green: StoryObj<typeof CheckboxWithAccentColor> = {
  name: 'みどり',
  args: {
    accentColor: 'green',
  },
};

export const Yellow: StoryObj<typeof CheckboxWithAccentColor> = {
  name: 'きいろ',
  args: {
    accentColor: 'yellow',
  },
};
