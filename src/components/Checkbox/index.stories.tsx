import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from '~/components/Checkbox';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <ChakraProvider>
    <ScreenCenterPlaced>
      <Checkbox {...args} />
    </ScreenCenterPlaced>
  </ChakraProvider>
);

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
