import { Meta, StoryObj } from '@storybook/react';

import Textarea from 'src/Textarea';

const meta: Meta = {
	title: 'Textarea',
	component: Textarea,
	render: args => <Textarea {...args} />,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		placeholder: 'Placeholder',
		defaultValue: 'Default value',
		maxLength: 100,
	},
};

export const Inputting: Story = {
	args: {
		placeholder: 'Placeholder',
		defaultValue: 'Default value',
		value: 'Value',
		maxLength: 100,
	},
};

export const Readonly: Story = {
	args: {
		placeholder: 'Placeholder',
		defaultValue: 'Default value',
		maxLength: 100,
		readOnly: true,
	},
};

export const Disabled: Story = {
	args: {
		placeholder: 'Placeholder',
		defaultValue: 'Default value',
		maxLength: 100,
		disabled: true,
	},
};
