import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import { PropsStyle } from 'src/types/style';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	active?: boolean;
	styles?: {
		default?: PropsStyle;
		active?: PropsStyle;
	};
}

export default function Button({ active, styles, ...props }: ButtonProps) {
	return <button {...props} css={[buttonCSS, styles?.default, active && [activeButtonCSS, styles?.active]]} />;
}

const buttonCSS = css`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px 16px;
	border-radius: 4px;
	font-size: 14px;

	background: #ffffff;

	border: 1px solid #b0b0b0;

	color: #727171;
	cursor: pointer;

	&:hover {
		color: #189680;
	}

	&:disabled {
		cursor: not-allowed;

		background: #f0f0f0;
		color: #e32626;
	}
`;

const activeButtonCSS = css`
	color: #189680;
`;
