import { css } from '@emotion/react';

import { PropsStyle } from 'src/types/style';

export interface VerticalProps {
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
		highlightBox?: PropsStyle;
		highlight?: PropsStyle;
		crossOut?: PropsStyle;
		rankBox?: PropsStyle;
		rankStarBox?: PropsStyle;
		rankStar?: {
			active: PropsStyle;
			inactive: PropsStyle;
		};
		rankDescription?: PropsStyle;
	};
}

export default function Vertical({ image, rank, crossOut, href, highlight, title, label, styles }: VerticalProps) {
	return (
		<a href={href} css={[containerCSS, styles?.container]}>
			<img src={image.src} alt={image.alt} css={[imageCSS, styles?.image]} />
			<div>
				<div css={[contentCSS, styles?.content]}>
					<div css={[cardInfoBoxCSS, styles?.cardInfoBox]}>
						<div css={[titleLabelBoxCSS, styles?.titleLabelBox]}>
							<h3 css={[titleCSS, styles?.title]}>{title}</h3>
							<p css={[labelCSS, styles?.label]}>{label}</p>
						</div>
						<div css={[highlightBoxCSS, styles?.highlightBox]}>
							<strong css={[highlightCSS, styles?.highlight]}>{highlight}</strong>
							<p css={[crossOutCSS, styles?.crossOut]}>{crossOut}</p>
						</div>
					</div>
					{rank && (
						<div css={[rankBoxCSS, styles?.rankBox]}>
							<ul css={[rankStarBoxCSS, styles?.rankStarBox]}>
								<li
									css={[
										rankStarCSS(rank.number > 0),
										rank.number > 0 ? styles?.rankStar?.active : styles?.rankStar?.inactive,
									]}
								/>
								<li
									css={[
										rankStarCSS(rank.number > 1),
										rank.number > 1 ? styles?.rankStar?.active : styles?.rankStar?.inactive,
									]}
								/>
								<li
									css={[
										rankStarCSS(rank.number > 2),
										rank.number > 2 ? styles?.rankStar?.active : styles?.rankStar?.inactive,
									]}
								/>
								<li
									css={[
										rankStarCSS(rank.number > 3),
										rank.number > 3 ? styles?.rankStar?.active : styles?.rankStar?.inactive,
									]}
								/>
								<li
									css={[
										rankStarCSS(rank.number > 4),
										rank.number > 4 ? styles?.rankStar?.active : styles?.rankStar?.inactive,
									]}
								/>
							</ul>
							{rank.description && <p css={[rankDescriptionCSS, styles?.rankDescription]}>{rank.description}</p>}
						</div>
					)}
				</div>
			</div>
		</a>
	);
}

const containerCSS = css`
	display: flex;
	flex-direction: column;

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

	width: 100%;
`;

const contentCSS = css`
	display: flex;
	flex-direction: column;

	width: 100%;
`;

const cardInfoBoxCSS = css`
	display: flex;
	flex-direction: column;

	gap: 24px;

	padding: 16px;

	width: 100%;
`;

const titleLabelBoxCSS = css`
	display: flex;
	flex-direction: column;
	gap: 8px;

	width: 100%;
`;

const titleCSS = css`
	font-size: 24px;
	font-weight: 700;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	color: #090909;

	margin: 0;
`;

const labelCSS = css`
	font-size: 16px;
	font-weight: 400;

	color: #7e7e7e;

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const highlightBoxCSS = css`
	display: flex;
	flex-basis: 100%;
	gap: 4px;
	align-items: center;

	width: 100%;
`;

const highlightCSS = css`
	font-size: 24px;
	font-weight: 700;

	color: red;

	flex: 0.7 0 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const crossOutCSS = css`
	font-size: 16px;
	font-weight: 400;

	color: #979797;

	text-decoration: line-through;

	flex: 0.3 1 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const rankBoxCSS = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;

	padding: 16px;

	border-top: 1px solid #979797;

	width: 100%;
	height: 80px;
`;

const rankStarBoxCSS = css`
	display: flex;
	gap: 8px;

	padding: 0;
	margin: 0;
	list-style: none;
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
`;
