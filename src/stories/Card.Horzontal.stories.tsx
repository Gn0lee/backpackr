import { Meta, StoryObj } from '@storybook/react';

import Card from 'src/components/Card';

const meta: Meta = {
	title: 'Card/Horizontal',
	component: Card.Horizontal,
};

export default meta;

type Story = StoryObj<typeof Card.Horizontal>;

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
				width: '600px',
				height: '200px',
			},
			image: {},
			content: {},
			cardInfoBox: {
				padding: '16px',
			},
			titleLabelBox: {},
			title: {
				color: '#090909',
			},
			label: {
				'-webkitLineClamp': '3',
			},
			rankBox: {},
			rankStarBox: {
				display: 'flex',
				gap: '4px',
			},
			rankStar: {
				active: {
					color: 'yellow',
				},
				inactive: {
					color: '#d8d8d8',
				},
			},
			rankDescription: {
				color: '#7e7e7e',
			},
			divider: {
				background: '#979797',
			},
		},
	},
};

export const WithoutRankDescription: Story = {
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
		},
		styles: {
			container: {
				width: '600px',
				height: '200px',
			},
			image: {},
			content: {},
			cardInfoBox: {
				padding: '16px',
			},
			titleLabelBox: {},
			title: {
				color: '#090909',
			},
			label: {
				'-webkitLineClamp': '3',
			},
			rankBox: {},
			rankStarBox: {
				display: 'flex',
				gap: '4px',
			},
			rankStar: {
				active: {
					color: 'yellow',
				},
				inactive: {
					color: '#d8d8d8',
				},
			},
			rankDescription: {
				color: '#7e7e7e',
			},
			divider: {
				background: '#979797',
			},
		},
	},
};

export const WithoutRank: Story = {
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
		styles: {
			container: {
				width: '600px',
				height: '200px',
			},
			image: {},
			content: {},
			cardInfoBox: {
				padding: '16px',
			},
			titleLabelBox: {},
			title: {
				color: '#090909',
			},
			label: {
				'-webkitLineClamp': '3',
			},
		},
	},
};
