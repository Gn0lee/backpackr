import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export default function GlobalStyles() {
	return (
		<Global
			styles={css`
				${emotionNormalize}

				html {
					font-size: 16px;

					width: 100%;
					height: 100%;
				}

				* {
					box-sizing: border-box;

					margin: 0;
					padding: 0;
					border: 0;
				}
			`}
		/>
	);
}
