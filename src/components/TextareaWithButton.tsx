import { css } from '@emotion/react';

import Button, { ButtonProps } from 'src/components/Button';
import Textarea, { TextareaProps } from 'src/components/Textarea';
import { PropsStyle } from 'src/types/style';

export interface TextareaWithButtonProps {
	buttonProps?: ButtonProps;
	textareaProps?: TextareaProps;
	styles?: {
		container?: PropsStyle;
	};
}

export default function TextareaWithButton({ styles, buttonProps, textareaProps }: TextareaWithButtonProps) {
	return (
		<div css={[containerCSS, styles?.container]}>
			<Textarea styles={{ default: { container: textareaCSS } }} {...textareaProps} />
			<Button styles={{ default: buttonCSS }} {...buttonProps} />
		</div>
	);
}

const containerCSS = css`
	display: flex;

	gap: 8px;

	height: 100%;
`;

const textareaCSS = css`
	flex: 1 1 auto;

	height: 100%;
`;

const buttonCSS = css`
	flex: 0 0 auto;
`;
