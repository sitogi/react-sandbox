import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BeforeByFlex } from '~/components/BeforeByFlex';

export default {
  title: 'Components/BeforeByFlex',
  component: BeforeByFlex,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BeforeByFlex>;

const Template: ComponentStory<typeof BeforeByFlex> = ({ decorationGapPx }: { decorationGapPx?: number }) => (
  <BeforeByFlex decorationGapPx={decorationGapPx} />
);

export const Initial = Template.bind({});
Initial.args = {
  decorationGapPx: undefined,
};
export const Gap50 = Template.bind({});
Gap50.args = {
  decorationGapPx: 50,
};
