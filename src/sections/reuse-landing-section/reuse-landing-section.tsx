import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import styles from './reuse-landing-section.module.scss';

import { text, marginCenter } from '../../components/layout/align';

import { Paragraph } from '../../components/base/paragraph';
import { H1 } from '../../components/concrete/heading';
import { IconLine } from '../../components/concrete/icon-line';
import { PrimaryLink } from '../../components/concrete/primary-link';
import { Grid } from '../../components/layout/grid-component';
import { Image } from '../../components/concrete/image';
import { textColumn } from '../../components/layout/page-frame';
import { EvaButton } from '../../components/concrete/eva-button';

const iconsArray = [
	'logo-react',
	'logo-vue',
	'logo-angular',
	'logo-web-components',
	'logo-ts',
	'logo-js',
];

interface ReuseLandingProps extends HTMLAttributes<HTMLDivElement> {
	mainCta?: ReactNode;
}

/**
 * @name IndependentTeams
 * @description
 * The Main and first section the user sees as he enters the page.
 * Assumes a dark purplish background behind it.
 */

export function ReuseLandingSection(props: ReuseLandingProps) {
	return (
		<div data-bit-id="bit.evangelist/sections/reuse-landing-section" {...props}>
			<Grid colL={2} className={classNames(styles.mainGrid, text.center, text.l.left)}>
				<div>
					<div>
						<H1 size={PossibleSizes.sm} className={styles.headline}>
							A better way to build
							<br />
							with modern components
						</H1>
						<Paragraph
							size={PossibleSizes.lg}
							className={classNames(styles.paragraph, textColumn, marginCenter)}
						>
							Bit is a scalable and collaborative way to build and reuse
							components. It's everything you need from local development to
							cross-project integrations. Try it for free.
						</Paragraph>
					</div>

					<Paragraph
						size={PossibleSizes.sm}
						element="div"
						className={classNames(styles.buttons)}
					>
						<PrimaryLink href="https://bit.dev/signup">
							<EvaButton importance="cta" elevation="medium">Get Started</EvaButton>
						</PrimaryLink>
						<div className={styles.spacer} />
						<PrimaryLink external href="https://docs.bit.dev/docs/quick-start">
							<EvaButton elevation="medium">Learn more</EvaButton>
						</PrimaryLink>
					</Paragraph>
					<IconLine icons={iconsArray} className={styles.icons} />
				</div>

				<Image
					src="homepage-bit/flying-man-01.svg"
					className={marginCenter}
					alt="illustration"
					fullWidth
				/>
			</Grid>
		</div>
	);
}
