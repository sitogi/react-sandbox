// noinspection JSUnusedGlobalSymbols

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AccordionByDetailsTag } from '~/featuers/AccordionByDetailsTag';
import { VStack } from '~/featuers/VStack';

export default {
  title: 'Components/AccordionByDetailsTag',
  component: AccordionByDetailsTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'https://github.com/sitogi/react-sandbox/blob/main/src/components/AccordionByDetailsTag/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof AccordionByDetailsTag>;

const Template: ComponentStory<typeof AccordionByDetailsTag> = () => (
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

export const Default = Template.bind({});
Default.args = {
  summaryText: 'サマリーテキストです',
};
