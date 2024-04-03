import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';

import GlobalStyles from 'src/components/style/GlobalStyles';
import Card from 'src/components/Card';
import TextareaWithButton from 'src/components/TextareaWithButton';
import Textarea from 'src/components/Textarea';

const TEXTAREA_DEFAULT_VALUE = 'Default value';
const TEXTAREA_PLACEHOLDER = 'Placeholder';
const TEXTAREA_MAX_LENGTH = 100;

const BUTTON_TEXT = 'Button';

function App() {
	const [value, setValue] = useState<string>();

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(event.target.value);
	};

	const handleClick = () => {
		alert(`Value: ${value ?? TEXTAREA_DEFAULT_VALUE}`);
	};

	const active = value !== undefined && value !== TEXTAREA_DEFAULT_VALUE;

	return (
		<>
			<div css={containerCSS}>
				<h1>Backpackr assignment</h1>
				<div>
					<div css={verticalCardContainerCSS}>
						<Card.Vertical
							image={{ src: 'https://via.placeholder.com/300', alt: 'Placeholder image' }}
							title="Title"
							label="Label"
							highlight="Highlight"
							crossOut="Cross out"
							href="/"
							rank={{ number: 4, description: 'Description' }}
						/>
						<Card.Vertical
							image={{ src: 'https://via.placeholder.com/300', alt: 'Placeholder image' }}
							title="Title"
							label="Label"
							highlight="Highlight"
							crossOut="Cross out"
							href="/"
							rank={{ number: 4 }}
						/>
						<Card.Vertical
							image={{ src: 'https://via.placeholder.com/300', alt: 'Placeholder image' }}
							title="Title"
							label="Label"
							highlight="Highlight"
							crossOut="Cross out"
							href="/"
						/>
					</div>
					<div css={horizontalCardContainerCSS}>
						<Card.Horizontal
							image={{ src: 'https://via.placeholder.com/300', alt: 'Placeholder image' }}
							title="Title"
							label="Label"
							highlight="Highlight"
							crossOut="Cross out"
							href="/"
							rank={{ number: 4, description: 'Description' }}
						/>
						<Card.Horizontal
							image={{ src: 'https://via.placeholder.com/300', alt: 'Placeholder image' }}
							title="Title"
							label="Label"
							highlight="Highlight"
							crossOut="Cross out"
							href="/"
							rank={{ number: 4 }}
						/>
						<Card.Horizontal
							image={{ src: 'https://via.placeholder.com/300', alt: 'Placeholder image' }}
							title="Title"
							label="Label"
							highlight="Highlight"
							crossOut="Cross out"
							href="/"
						/>
					</div>
					<div css={textareaCSS}>
						<TextareaWithButton
							textareaProps={{
								onChange: handleChange,
								value,
								placeholder: TEXTAREA_PLACEHOLDER,
								defaultValue: TEXTAREA_DEFAULT_VALUE,
								maxLength: TEXTAREA_MAX_LENGTH,
							}}
							buttonProps={{ active, onClick: handleClick, children: BUTTON_TEXT }}
						/>
						<TextareaWithButton
							textareaProps={{
								disabled: true,
								placeholder: TEXTAREA_PLACEHOLDER,
								defaultValue: TEXTAREA_DEFAULT_VALUE,
								maxLength: TEXTAREA_MAX_LENGTH,
							}}
							buttonProps={{ disabled: true, children: BUTTON_TEXT }}
						/>
						<Textarea
							placeholder={TEXTAREA_PLACEHOLDER}
							defaultValue={TEXTAREA_DEFAULT_VALUE}
							maxLength={TEXTAREA_MAX_LENGTH}
							readOnly
						/>
					</div>
				</div>
			</div>
			<GlobalStyles />
		</>
	);
}

export default App;

const containerCSS = css`
	padding: 20px;
`;

const verticalCardContainerCSS = css`
	width: 800px;

	display: grid;

	grid-template-columns: repeat(3, 1fr);
	gap: 16px;

	margin: 20px 0;
`;

const horizontalCardContainerCSS = css`
	display: grid;

	width: 600px;

	margin: 20px 0;

	gap: 16px;

	grid-template-rows: repeat(3, 150px);
`;

const textareaCSS = css`
	display: grid;

	width: 500px;

	gap: 16px;

	grid-template-rows: repeat(3, 100px);
`;
