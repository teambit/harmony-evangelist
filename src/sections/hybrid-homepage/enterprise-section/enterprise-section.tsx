import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './enterprise-section.module.scss';

import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { Paragraph } from '@teambit/base-ui.text.paragraph';

import { text, alignItems } from '@teambit/base-ui.layout.align';
import { Grid } from '@teambit/base-ui.layout.grid-component';
import { colSpanMd } from '@teambit/base-ui.layout.col-span';

import { Image } from '@teambit/evangelist.elements.image';
import { H2, H4 } from '@teambit/evangelist.elements.heading';
import { Icon } from '@teambit/evangelist.elements.icon';
import { Link } from '@teambit/evangelist.elements.link';

/**
 * @name EnterpriseSection
 * @description
 * A section of static content, presenting Bit's cloud platform.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function EnterpriseSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(text.center, props.className)}
			data-bit-id="bit.evangelist/sections/enterprise-section"
		>
			<Grid
				col={1}
				colMd={12}
				className={classNames(text.left, alignItems.center, styles.content)}
			>
				<div className={colSpanMd[7]}>
					<H2 size={PossibleSizes.sm}>Get your enterprise-grade component cloud</H2>
					<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
						Meet the component cloud: where your team can host, share and
						collaborate on all your components in one place. It’s everything you
						need and more. Try it for free.
					</Paragraph>
					<Paragraph size={PossibleSizes.sm}>
						<Link className={styles.ctaLink} href="/pricing">
							See plans and pricing
							<Icon of="right_arrow" className={styles.linkArrow} />
						</Link>
					</Paragraph>
				</div>
				<div className={colSpanMd[5]}>
					<Image
						fullWidth
						alt="cloud components"
						src="homepage-bit/reuse-page/cloud-components.png"
					/>
				</div>
			</Grid>

			<Grid colMd={3} className={classNames(text.md.left, text.center, styles.benefits)}>
				<div>
					<Image
						className={styles.icon}
						alt="private"
						src="homepage-bit/reuse-page/private.svg"
					/>
					<H4 size={PossibleSizes.xxs}>Private and secure</H4>
					<Paragraph>
						Keep your code private and secure with the highest standards.
					</Paragraph>
				</div>

				<div>
					<Image
						className={styles.icon}
						alt="cloud"
						src="homepage-bit/reuse-page/cloud.svg"
					/>
					<H4 size={PossibleSizes.xxs}>Zero setup overhead</H4>
					<Paragraph>
						Create a cloud workspace in seconds and start working.
					</Paragraph>
				</div>

				<div>
					<Image
						className={styles.icon}
						alt="vendor"
						src="homepage-bit/reuse-page/vendor.svg"
					/>
					<H4 size={PossibleSizes.xxs}>No vendor lock-in</H4>
					<Paragraph>
						Move components to any other server any time you choose.
					</Paragraph>
				</div>
			</Grid>
		</div>
	);
}
