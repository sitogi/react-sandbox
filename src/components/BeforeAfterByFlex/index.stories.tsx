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
  argTypes: {
    decorationGapPx: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
  },
} as ComponentMeta<typeof BeforeAfterByFlex>;

const Template: ComponentStory<typeof BeforeAfterByFlex> = (args) => <BeforeAfterByFlex {...args} />;

export const Default = Template.bind({});
Default.args = {
  decorationGapPx: undefined,
};

export const Gap50 = Template.bind({});
Gap50.args = {
  decorationGapPx: 50,
};

export const Gap100 = Template.bind({});
Gap100.args = {
  decorationGapPx: 100,
};
