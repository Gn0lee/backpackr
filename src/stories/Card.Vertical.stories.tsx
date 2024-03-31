import { Meta, StoryObj } from '@storybook/react';

import Card from 'src/components/Card';

const meta: Meta = {
	title: 'Card/Vertical',
	component: Card.Vertical,
};

export default meta;

type Story = StoryObj<typeof Card.Vertical>;

export const Default: Story = {
	args: {
		image: {
			src: 'https://via.placeholder.com/300',
			alt: 'Placeholder image',
		},
		title: 'Title',
		label: 'Label',
		highlight: 'Highlight',
		crossOut: 'Cross out',
		href: '/',
		rank: {
			number: 4,
			description: 'Description',
		},
		styles: {
			container: {
				backgroundColor: '#fbfbfb',
			},
			image: {
				width: '100%',
			},
			content: {
				width: '100%',
			},
			cardInfoBox: {
				padding: '16px',
			},
			titleLabelBox: {
				width: '100%',
			},
			title: {
				color: '#090909',
			},
			label: {
				color: '#7e7e7e',
			},
			highlightBox: {
				gap: '4px',
			},
			highlight: {
				color: 'red',
			},
			crossOut: {
				color: '#979797',
			},
			rankBox: {
				borderTop: '1px solid #979797',
			},
			rankStarBox: {
				gap: '8px',
			},
			rankStar: {
				active: {
					color: '#F3C229FF',
				},
				inactive: {
					color: '#807e7e',
				},
			},
			rankDescription: {
				color: '#5d5d5d',
			},
		},
	},
};
