import React from 'react';
import classNames from 'classnames';

import styles from './cta-section.module.scss';

import { H2 } from '@teambit/evangelist-temp01.elements.heading';
import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { justifyItems, alignItems, text } from '@teambit/base-ui.layout.align';
import { Link } from '@teambit/evangelist-temp01.elements.link';
import { Button } from '@teambit/evangelist-temp01.elements.button';

type CtaProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @name CtaSection
 * @description
 * Best section yet! Encourage the user to signup with a big and responsive call to action.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function CtaSection(props: CtaProps) {
	const { ...rest } = props;

	return (
		<Grid
			{...rest}
			colSm={2}
			className={classNames(
				props.className,
				styles.ctaSection,
				justifyItems.center,
				alignItems.center,
				text.center,
				text.sm.left
			)}
			data-bit-id="bit.evangelist/sections/cta"
		>
			<div>
				<H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
				<Paragraph size={PossibleSizes.lg}>
					Empower your team to build faster together.
				</Paragraph>
			</div>
			<Link href="/signup">
				<Button importance="cta">Start for free</Button>
			</Link>
		</Grid>
	);
}
