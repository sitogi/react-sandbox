import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CheckboxWithAccentColor } from '~/components/CheckboxWithAccentColor';

export default {
  title: 'Components/CheckboxWithAccentColor',
  component: CheckboxWithAccentColor,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/Checkbox/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof CheckboxWithAccentColor>;

const Template: ComponentStory<typeof CheckboxWithAccentColor> = (args) => <CheckboxWithAccentColor {...args} />;

export const Default = Template.bind({});
Default.args = {
  accentColor: undefined,
};

export const Purple = Template.bind({});
Purple.args = {
  accentColor: 'purple',
};

export const Green = Template.bind({});
Green.args = {
  accentColor: 'green',
};

export const Yellow = Template.bind({});
Yellow.args = {
  accentColor: 'yellow',
};
