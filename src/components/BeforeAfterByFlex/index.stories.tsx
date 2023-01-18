import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BeforeAfterByFlex } from '~/components/BeforeAfterByFlex';

export default {
  title: 'Components/BeforeAfterByFlex',
  component: BeforeAfterByFlex,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    decorationGapPx: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof BeforeAfterByFlex>;

const Template: ComponentStory<typeof BeforeAfterByFlex> = ({ decorationGapPx }: { decorationGapPx?: number }) => (
  <BeforeAfterByFlex decorationGapPx={decorationGapPx} />
);

export const Default = Template.bind({});
Default.args = {
  decorationGapPx: undefined,
};

export const Gap50 = Template.bind({});
Gap50.args = {
  decorationGapPx: 50,
};
