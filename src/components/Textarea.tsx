import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import { PropsStyle } from 'src/types/style';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
	styles?: {
		inputting?: {
			container?: PropsStyle;
			currentLength?: PropsStyle;
			textarea?: PropsStyle;
		};

		default?: {
			container?: PropsStyle;
			currentLength?: PropsStyle;
			textarea?: PropsStyle;
		};
	};
	value?: string;
	defaultValue?: string;
}

export default function Textarea({ styles, ...props }: TextareaProps) {
	const inputting =
		!props.readOnly && !props.disabled && props.defaultValue && props.value && props.defaultValue !== props.value;

	return (
		<div css={[containerCSS, styles?.default?.container, inputting && styles?.inputting?.container]}>
			<textarea
				{...props}
				css={[textareaCSS, styles?.default?.textarea, inputting && inputtingTextareaCSS, styles?.inputting?.textarea]}
			/>
			{props.maxLength && (
				<div css={[currentLengthCSS, styles?.default?.currentLength, inputting && styles?.inputting?.currentLength]}>
					{props.maxLength - (props.value?.length || 0)}
				</div>
			)}
		</div>
	);
}

const containerCSS = css`
	position: relative;
`;

const textareaCSS = css`
	display: block;

	width: 100%;
	height: 100%;

	padding: 8px;

	color: #1c1c1c;

	border: 1px solid #bbbbbb;
	border-radius: 4px;
	font-size: 14px;

	background: #fafafa;

	&::placeholder {
		color: #3f3d3d;
	}

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: none;
	}

	&:disabled {
		background: #f0f0f0;
		color: #e32626;
	}

	&:read-only {
		background: #f0f0f0;

		cursor: not-allowed;
	}
`;

const inputtingTextareaCSS = css`
	border: 1px solid #4fc29a;
`;

const currentLengthCSS = css`
	position: absolute;
	bottom: 6px;
	right: 14px;

	font-size: 11px;

	color: #6e6e6e;
`;
