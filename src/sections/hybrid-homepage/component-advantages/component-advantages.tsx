import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './component-advantages.module.scss';

import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { text, alignItems } from '@teambit/base-ui.layout.align';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { fourWayGrid } from '@teambit/base-ui.layout.grid-presets.four-way-grid';

import { Image } from '@teambit/evangelist.elements.image';
import { H3 } from '@teambit/evangelist.elements.heading';

/**
 * @name ComponentsAdvantages
 * @description
 * A section detailing the advantages of components, their isolation, and interoperability between projects.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function ComponentsAdvantages(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className)}
			data-bit-id="teambit.evangelist/sections/component-advantages"
		>
			<Grid
				colMd={12}
				className={classNames(
					text.center,
					text.sm.left,
					fourWayGrid,
					alignItems.center
				)}
			>
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Build independent components</H3>
					<Paragraph>
						Build components you can use anywhere and compose them together to
						create infinite features and apps, in a simple yet powerful developer
						experience.
					</Paragraph>
				</div>
				<Image
					alt="editor with component"
					src="homepage-bit/editor-logo-comp.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>
						Compose components to create infinite features and apps
					</H3>
					<Paragraph>
						Enjoy simple yet scalable semantic versioning per component, with smart
						automatic dependency definitions and management.
					</Paragraph>
				</div>
				<Image
					alt="smart versioning"
					src="homepage-bit/example-008.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>
						Compose and reuse your component dev environments
					</H3>
					<Paragraph>
						Compose your favorite dev tools into dev environments you can reuse
						across components and projects to speed and standardize development.
					</Paragraph>
				</div>
				<Image
					alt="dev tools integrations"
					src="homepage-bit/devtools.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>
						Enjoy an effortless, scalable monorepo dev experience
					</H3>
					<Paragraph>
						Bit brings you the benefits of highly modular and distributed
						development, with a simple holistic dev experience that makes
						development fun!
					</Paragraph>
				</div>
				<Image
					alt="goodbye conf files"
					src="homepage-bit/goodbye-configuration-files.png"
					className={styles.img}
					fullWidth
				/>
			</Grid>
		</div>
	);
}
