import { Meta, StoryObj } from '@storybook/react';

import Button from 'src/components/Button';

const meta: Meta = {
	title: 'Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

export const Active: Story = {
	args: {
		children: 'Button',
		active: true,
	},
};

export const Disabled: Story = {
	args: {
		children: 'Button',
		disabled: true,
	},
};
