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
    showPanel: false,
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

export const decorators = [(Story) => <Story />];
