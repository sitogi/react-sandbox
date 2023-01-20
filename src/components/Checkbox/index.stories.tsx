import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '~/components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/Checkbox/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  accentColor: undefined,
};

export const Pink = Template.bind({});
Pink.args = {
  accentColor: 'pink',
};

export const Green = Template.bind({});
Green.args = {
  accentColor: 'green',
};

export const Purple = Template.bind({});
Purple.args = {
  accentColor: 'purple',
};
