// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { BeforeAfterByFlex } from '~/featuers/BeforeAfterByFlex';

export default {
  title: 'Components/BeforeAfterByFlex',
  component: BeforeAfterByFlex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/BeforeAfterByFlex/index.tsx',
      },
    },
  },
} as Meta<typeof BeforeAfterByFlex>;

export const Default: StoryObj<typeof BeforeAfterByFlex> = {
  name: '通常表示',
  args: {
    decorationGap: 'gapMd',
  },
};

export const GapSmall: StoryObj<typeof BeforeAfterByFlex> = {
  name: '間隔小さめ',
  args: {
    decorationGap: 'gapSm',
  },
};

export const GapLarge: StoryObj<typeof BeforeAfterByFlex> = {
  name: '間隔大きめ',
  args: {
    decorationGap: 'gapLg',
  },
};
