import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './build-together.module.scss'; 

import { fourWayGrid } from '@teambit/base-ui.layout.grid-presets.four-way-grid';

import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { Paragraph } from '@teambit/base-ui.text.paragraph';

import { text, alignItems, marginCenter } from '@teambit/base-ui.layout.align';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { textColumn } from '@teambit/base-ui.layout.page-frame';

import { Image } from '@teambit/evangelist.elements.image';
import { H2, H3 } from '@teambit/evangelist.elements.heading';

/**
 * @name BuildTogether
 * @description
 * A section of static content, showing Bit's collaboration abilities.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function BuildTogether(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className, text.center)}
			data-bit-id="bit.evangelist/sections/build-together"
		>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>Keep apps and teams in perfect sync</H2>

				<Paragraph size={PossibleSizes.lg} className={styles.subtitle}>
					Bit helps your team collaborate to make sure every application and every
					teammate is always in sync and always up to date. And, it integrates to the
					tools you love.
				</Paragraph>
			</div>

			<Grid
				className={classNames(
					text.center,
					text.sm.left,
					fourWayGrid,
					alignItems.center
				)}
			>
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Focused relevant updates</H3>
					<Paragraph>
						No more bloated or irrelevant library updates. Constantly get and
						deliver meaningful updates for components you actually use in your apps,
						nothing else.
					</Paragraph>
				</div>
				<Image alt="multi packagers" src="homepage-bit/assets/component-versions.png" fullWidth />

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Per-component CI</H3>
					<Paragraph>
						Enjoy bulletproof updates with per-component CI that runs every
						component in full isolation. Reduce build and CI time by building and
						testing only your changed components.
					</Paragraph>
				</div>
				<Image alt="cloud code" src="homepage-bit/comp-build-flow.png" fullWidth />
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Keep repos synced with GitHub integrations</H3>
					<Paragraph>
						Connect your team to GitHub to get automatic PRs for every new component
						update. Effortlessly keep every project in perfect sync, and learn who
						adopted what and where.
					</Paragraph>
				</div>
				<Image
					alt="cloud components"
					src="homepage-bit/assets/automated-github.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Keep people synced with Slack integrations</H3>
					<Paragraph>
						Connect your team to Slack to get automatic updates on important stuff
						like new component versions. Create relevant discussions with instant
						feedback.
					</Paragraph>
				</div>
				<Image
					alt="components community"
					src="homepage-bit/slack-integration.png"
					fullWidth
				/>
			</Grid>
		</div>
	);
}
