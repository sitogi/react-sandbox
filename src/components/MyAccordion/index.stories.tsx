import { Box, List, ListItem } from '@chakra-ui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyAccordion } from '~/components/MyAccordion/index';

export default {
  title: 'Components/MyAccordion',
  component: MyAccordion,
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
} as ComponentMeta<typeof MyAccordion>;

const Template: ComponentStory<typeof MyAccordion> = (args) => (
  <Box w="300px" h="300px" rounded="md">
    <MyAccordion {...args}>
      <List pl="1.5rem" mt="20px">
        <ListItem h="40px">てすと 1</ListItem>
        <ListItem h="40px">てすと 2</ListItem>
        <ListItem h="40px">てすと 3</ListItem>
        <ListItem h="40px">てすと 4</ListItem>
        <ListItem h="40px">てすと 5</ListItem>
      </List>
    </MyAccordion>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  summaryText: 'サマリーテキストです',
};
