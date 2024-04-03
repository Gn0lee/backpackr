import { Meta, StoryObj } from '@storybook/react';
import { useState, ChangeEvent } from 'react';

import TextareaWithButton, { TextareaWithButtonProps } from 'src/components/TextareaWithButton';

const meta: Meta<TextareaWithButtonProps> = {
	title: 'TextareaWithButton',
	component: TextareaWithButton,
	render: args => {
		const [value, setValue] = useState<string>();

		const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
			setValue(event.target.value);
		};

		const handleClick = () => {
			alert(`Value: ${value ?? args.textareaProps?.defaultValue}`);
		};

		const active = value !== undefined && value !== args.textareaProps?.defaultValue;

		return (
			<div style={{ width: '500px', height: '100px' }}>
				<TextareaWithButton
					{...args}
					textareaProps={{ ...args.textareaProps, value, onChange: handleChange }}
					buttonProps={{ ...args.buttonProps, active, onClick: handleClick }}
				/>
			</div>
		);
	},
};

export default meta;

type Story = StoryObj<typeof TextareaWithButton>;

export const Default: Story = {
	args: {
		buttonProps: {
			children: 'Button',
		},
		textareaProps: {
			placeholder: 'Placeholder',
			defaultValue: 'Default value',
			maxLength: 100,
		},
	},
};

export const Disabled: Story = {
	args: {
		buttonProps: {
			children: 'Button',
			disabled: true,
		},
		textareaProps: {
			placeholder: 'Placeholder',
			defaultValue: 'Default value',
			maxLength: 100,
			disabled: true,
		},
	},
};
