import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { themedText } from '@teambit/base-ui.text.themed-text';
import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { text, marginCenter } from '@teambit/base-ui.layout.align';
import { Grid } from '@teambit/base-ui.layout.grid-component';

import { Button } from '@teambit/evangelist-temp01.elements.button';
import { H1 } from '@teambit/evangelist-temp01.elements.heading';
import { Image } from '@teambit/evangelist-temp01.elements.image';

import styles from './hero.module.scss';

type HeroProps = {
	/** handles 'book meeting' call to action */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function Hero(props: HeroProps) {
	const { onBookMeeting, ...rest } = props;

	return (
		<Grid
			colL={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
			className={classNames(props.className, text.center, text.l.left, styles.mainGrid)}
		>
			<div className={classNames(styles.content)}>
				<H1 size={PossibleSizes.sm} className={themedText}>
					The enterprise component platform
				</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					Let your components drive web application delivery at global scale. Enjoy
					world-class performance, security and support every step of the way.
				</Paragraph>

				<div className={styles.buttons}>
					<a href="/contact-sales?redirectUri=%2Fenterprise">
						<Button importance="cta">Contact Sales</Button>
					</a>
					<div className={styles.spacer} />
					<Button onClick={props.onBookMeeting}>Book Intro</Button>
				</div>
			</div>
			<Image
				src="enterprise-offering-v1/1-hero-section/hero-enterprise.svg"
				alt="compartmentalized corporate ui"
				className={classNames(marginCenter, styles.image)}
			/>
		</Grid>
	);
}
