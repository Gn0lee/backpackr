import type { Preview } from '@storybook/react';

import GlobalStyles from 'src/components/style/GlobalStyles';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  ]
};

export default preview;
