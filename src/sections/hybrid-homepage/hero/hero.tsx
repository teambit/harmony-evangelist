import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hero.module.scss'; 

import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { text, marginCenter } from '@teambit/base-ui.layout.align';

import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { textColumn } from '@teambit/base-ui.layout.page-frame';

import { links } from '@teambit/evangelist-temp.content.links';
import { H1 } from '@teambit/evangelist-temp.elements.heading';
import { IconLine } from '@teambit/evangelist-temp.elements.icon-line';
import { Link } from '@teambit/evangelist-temp.elements.link';
import { Image } from '@teambit/evangelist-temp.elements.image';
import { Button } from '@teambit/evangelist-temp.elements.button';

const iconsArray = [
	'logo-react',
	'logo-vue',
	'logo-angular',
	'logo-web-components',
	'logo-ts',
	'logo-js',
];

type ReuseLandingProps = {
	/**
	 * Placeholder for content, at the bottom of this section
	 */
	mainCta?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * @name Hero
 * @description
 * The Main and first section the user sees as he enters the page.
 * Assumes a dark purplish background behind it.
 */

export function Hero(props: ReuseLandingProps) {
	return (
		<div data-bit-id="bit.evangelist/sections/hero" {...props}>
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
						<Link href="/signup">
							<Button importance="cta" elevation="medium">
								Get Started
							</Button>
						</Link>
						<div className={styles.spacer} />
						<Link external href={`${links.docs}/docs/quick-start`}>
							<Button elevation="medium">Learn More</Button>
						</Link>
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
