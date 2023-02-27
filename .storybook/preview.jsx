import { ChakraProvider } from '@chakra-ui/react';
import { ScreenCenterPlaced } from '~/components/VStack';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Components',
        [
          'HorizontallyResizableLayout',
          'VerticallyResizableLayout',
          'AccordionByDetailsTag',
          'BeforeAfterByFlex',
          'CheckboxWithAccentColor',
        ],
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <ScreenCenterPlaced>
        <Story />
      </ScreenCenterPlaced>
    </ChakraProvider>
  ),
];
