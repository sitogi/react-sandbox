// noinspection JSUnusedGlobalSymbols

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { FadeIn } from './index';

const Template: StoryFn<typeof FadeIn> = () => (
  <div style={{ width: '300px', height: '300px' }}>
    <FadeIn>
      <div style={{ padding: '10px', backgroundColor: '#a7ccf1', marginTop: '10px' }}>てすと 1</div>
      <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 2</div>
      <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 3</div>
      <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 4</div>
      <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 5</div>
    </FadeIn>
  </div>
);

export default {
  title: 'Components/FadeIn',
  component: Template,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/FadeIn/index.tsx',
      },
    },
  },
} as Meta<typeof FadeIn>;

export const Default: StoryObj = {
  name: '通常表示',
};
