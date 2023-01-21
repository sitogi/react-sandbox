import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HorizontallyResizableLayout } from '~/components/HorizontallyResizableLayout';
import { VerticallyResizableLayout } from '~/components/VerticallyResizableLayout';

export default {
  title: 'Components/HorizontallyResizableLayout',
  component: HorizontallyResizableLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'https://github.com/sitogi/react-sandbox/blob/main/src/components/HorizontallyResizableLayout/index.tsx',
      },
    },
  },
} as ComponentMeta<typeof HorizontallyResizableLayout>;

const Template: ComponentStory<typeof HorizontallyResizableLayout> = (args) => (
  <HorizontallyResizableLayout {...args} />
);

export const Default = Template.bind({});

export const WithVerticallyResizableSidebar = Template.bind({});
WithVerticallyResizableSidebar.args = {
  aside: <VerticallyResizableLayout />,
};
