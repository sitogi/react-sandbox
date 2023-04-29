// noinspection JSUnusedGlobalSymbols

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { AccordionByDetailsTag } from '~/featuers/AccordionByDetailsTag';
import { VStack } from '~/featuers/VStack';

const Template: StoryFn<typeof AccordionByDetailsTag> = () => (
  <div style={{ width: '300px', height: '300px' }}>
    <AccordionByDetailsTag summaryText="サマリーテキストです">
      <VStack>
        <div style={{ padding: '10px', backgroundColor: '#a7ccf1', marginTop: '10px' }}>てすと 1</div>
        <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 2</div>
        <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 3</div>
        <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 4</div>
        <div style={{ padding: '10px', backgroundColor: '#a7ccf1' }}>てすと 5</div>
      </VStack>
    </AccordionByDetailsTag>
  </div>
);

export default {
  title: 'Components/AccordionByDetailsTag',
  component: Template,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/AccordionByDetailsTag/index.tsx',
      },
    },
  },
} as Meta<typeof AccordionByDetailsTag>;

export const Default: StoryObj = {
  name: '通常表示',
};
