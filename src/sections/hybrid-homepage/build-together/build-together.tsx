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
			data-bit-id="teambit.evangelist/sections/build-together"
		>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>
					Continuously release and integrate component updates. Innovate more.
				</H2>

				<Paragraph size={PossibleSizes.lg} className={styles.subtitle}>
					Bit empowers teams to deliver more often and faster to production while
					making sure all applications and teams are updated in perfect sync and
					harmony.
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
					<H3 size={PossibleSizes.xs}>
						Rapidly release component upgrades, hotfixes, or rollbacks
					</H3>
					<Paragraph>
						Deliver updates fast and fearlessly multiple times a day with decoupled
						component versions and release pipelines. Ship changes to many apps in a
						click.
					</Paragraph>
				</div>
				<Image
					alt="multi packagers"
					src="homepage-bit/assets/component-versions.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>
						Build and test all impacted components, nothing else
					</H3>
					<Paragraph>
						Bit's component-driven CI propogates changes to all impacted components,
						in all your apps, and nothing else. Result: 10x faster builds, and
						bulletproof updates.
					</Paragraph>
				</div>
				<Image alt="cloud code" src="homepage-bit/comp-build-flow.png" fullWidth />
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>
						Automatically create PRs to impacted GitHub projects
					</H3>
					<Paragraph>
						Connect Bit with GitHub to get automatic PRs for every new component
						update. Effortlessly keep dependant projects up to date, and track
						adoption.
					</Paragraph>
				</div>
				<Image
					alt="cloud components"
					src="homepage-bit/assets/automated-github.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>
						Keep everyone in the loop with automatic Slack updates
					</H3>
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
