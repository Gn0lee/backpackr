import { css } from '@emotion/react';

import { PropsStyle } from 'src/types/style';

export interface HorizontalProps {
	image: {
		src: string;
		alt: string;
	};
	title: string;
	label: string;
	highlight: string;
	crossOut: string;
	rank?: {
		number: number;
		description?: string;
	};
	href: string;
	styles?: {
		container?: PropsStyle;
		image?: PropsStyle;
		content?: PropsStyle;
		cardInfoBox?: PropsStyle;
		titleLabelBox?: PropsStyle;
		title?: PropsStyle;
		label?: PropsStyle;
		rankBox?: PropsStyle;
		rankStarBox?: PropsStyle;
		rankStar?: {
			active: PropsStyle;
			inactive: PropsStyle;
		};
		rankDescription?: PropsStyle;
		divider?: PropsStyle;
	};
}

export default function Horizontal({ image, rank, href, title, label, styles }: HorizontalProps) {
	return (
		<a href={href} css={[containerCSS, styles?.container]}>
			<img src={image.src} alt={image.alt} css={[imageCSS, styles?.image]} />
			<div css={[contentCSS, styles?.content]}>
				<div css={[titleLabelBoxCSS, styles?.titleLabelBox]}>
					<h3 css={[titleCSS, styles?.title]}>{title}</h3>
					<p css={[labelCSS, styles?.label]}>{label}</p>
				</div>
				{rank && (
					<div css={[rankBoxCSS, styles?.rankBox]}>
						<ul css={[rankStarBoxCSS, styles?.rankStarBox]}>
							<li css={[rankStarCSS(rank?.number >= 1), styles?.rankStar?.active]} />
							<li css={[rankStarCSS(rank?.number >= 2), styles?.rankStar?.active]} />
							<li css={[rankStarCSS(rank?.number >= 3), styles?.rankStar?.active]} />
							<li css={[rankStarCSS(rank?.number >= 4), styles?.rankStar?.active]} />
							<li css={[rankStarCSS(rank?.number >= 5), styles?.rankStar?.active]} />
						</ul>
						{rank.description && (
							<>
								<hr css={[dividerCSS, styles?.divider]} />
								<div css={[rankDescriptionCSS, styles?.rankDescription]}>{rank?.description}</div>
							</>
						)}
					</div>
				)}
			</div>
		</a>
	);
}

const containerCSS = css`
	display: flex;

	border: 1px solid #979797;
	border-radius: 8px;

	overflow: hidden;

	background: #fbfbfb;
	text-decoration: none;
`;

const imageCSS = css`
	object-fit: cover;
	object-position: center;

	flex: none;
`;

const contentCSS = css`
	flex: 1 1 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 16px;

	overflow: hidden;

	border-left: 1px solid #979797;
`;

const titleLabelBoxCSS = css`
	flex: 0 1 auto;

	display: flex;
	flex-direction: column;
	gap: 8px;

	width: 100%;
`;

const titleCSS = css`
	flex: 0 1 auto;

	font-size: 24px;
	font-weight: 700;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	color: #090909;

	margin: 0;
`;

const labelCSS = css`
	word-break: break-word;
	flex: 0 1 auto;
	display: -webkit-box;
	-webkit-box-orient: vertical;

	font-size: 16px;
	font-weight: 400;

	color: #7e7e7e;

	overflow: hidden;
	text-overflow: ellipsis;
`;

const rankBoxCSS = css`
	flex: 0 0 auto;

	display: flex;
	align-items: center;
	gap: 8px;

	overflow: hidden;

	width: 100%;
`;

const rankStarBoxCSS = css`
	display: flex;
	gap: 8px;

	padding: 0;
	margin: 0;
	list-style: none;

	flex: 0 1 auto;
`;

const rankStarCSS = (isActive: boolean) => css`
	flex: none;

	width: 16px;
	height: 16px;

	background: ${isActive ? '#F3C229FF' : '#807e7e'};
	border-radius: 50%;

	padding: 0;
	margin: 0;
	list-style: none;
`;

const rankDescriptionCSS = css`
	font-size: 16px;
	font-weight: 400;

	color: #5d5d5d;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	max-width: 100%;

	flex: 1;
`;

const dividerCSS = css`
	width: 1px;
	height: 10px;

	background: #979797;
`;
