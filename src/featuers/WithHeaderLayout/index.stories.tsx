// noinspection JSUnusedGlobalSymbols

import { Meta, StoryObj } from '@storybook/react';

import { WithHeaderLayout } from './index';

export default {
  title: 'Components/WithHeaderLayout',
  component: WithHeaderLayout,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof WithHeaderLayout>;

const header = (
  <div
    style={{
      display: 'grid',
      placeContent: 'center',
      height: '100%',
      backgroundColor: '#d1eaa1',
    }}
  >
    <p style={{ fontSize: '2rem' }}>header</p>
  </div>
);

const content = (
  <div style={{ display: 'grid', placeContent: 'center', height: '100%', backgroundColor: '#a1ddea' }}>
    <p style={{ fontSize: '2rem' }}>content</p>
  </div>
);

export const Default: StoryObj<typeof WithHeaderLayout> = {
  name: '通常表示',
  args: { header, content, layoutH: '100%' },
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '600px', border: 'solid 2px gray' }}>
        <Story />
      </div>
    ),
  ],
};
