import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';

import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { text, marginCenter } from '@teambit/base-ui.layout.align';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { textColumn } from '@teambit/base-ui.layout.page-frame';

import { H1 } from '@teambit/evangelist.elements.heading';
import { IconLine } from '@teambit/evangelist.elements.icon-line';
import { Link } from '@teambit/evangelist.elements.link';
import { Image } from '@teambit/evangelist.elements.image';
import { Button } from '@teambit/evangelist.elements.button';
import styles from './hero.module.scss';

const iconsArray = [
	'logo-react',
	'logo-vue',
	'logo-angular',
	'logo-web-components',
	'logo-nodejs',
	'logo-ts',
	'logo-js',
];

const typeWriterArray = [
	'build with components',
	'build micro frontends',
	'build design systems',
	'release features faster',
	'build web apps together',
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
		<div data-bit-id="teambit.evangelist/sections/hero" {...props}>
			<Grid colL={2} className={classNames(styles.mainGrid, text.center, text.l.left)}>
				<div>
					<div>
						<H1 size={PossibleSizes.sm} className={styles.headline}>
							How the best teams
							<br />
							<Typewriter
								onInit={() => {}}
								options={{
									strings: typeWriterArray,
									autoStart: true,
									loop: true,
									delay: 50,
									deleteSpeed: 50,
								}}
							/>
						</H1>
						<Paragraph
							size={PossibleSizes.lg}
							className={classNames(styles.paragraph, textColumn, marginCenter)}
						>
							Bit is a standard infrastructure for components. It's everything
							your teams need to enjoy autonomous development, faster releases,
							effortless consistency, and collaboration at scale. Try it out for
							free.
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
						<Link href="/contact-sales">
							<Button elevation="medium">Get a Demo</Button>
						</Link>
					</Paragraph>
					<IconLine icons={iconsArray} className={styles.icons} />
				</div>

				<Image
					src="homepage-bit/process-2.svg"
					className={marginCenter}
					alt="illustration"
					fullWidth
				/>
			</Grid>
		</div>
	);
}
