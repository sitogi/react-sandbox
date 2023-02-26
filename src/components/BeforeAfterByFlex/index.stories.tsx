// noinspection JSUnusedGlobalSymbols

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BeforeAfterByFlex } from '~/components/BeforeAfterByFlex';

export default {
  title: 'Components/BeforeAfterByFlex',
  component: BeforeAfterByFlex,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/BeforeAfterByFlex/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof BeforeAfterByFlex>;

const Template: ComponentStory<typeof BeforeAfterByFlex> = (args) => <BeforeAfterByFlex {...args} />;

export const Default = Template.bind({});
Default.args = {
  decorationGap: undefined,
};

export const GapSM = Template.bind({});
GapSM.args = {
  decorationGap: 'gap-sm',
};

export const GapLG = Template.bind({});
GapLG.args = {
  decorationGap: 'gap-lg',
};
