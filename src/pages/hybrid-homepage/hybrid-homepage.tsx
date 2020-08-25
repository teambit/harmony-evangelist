import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { backgrounds } from '@teambit/base-ui.surfaces.background';
import { centerColumn, wideColumn } from '@teambit/base-ui.layout.page-frame';

import { CarouselSection } from '@teambit/evangelist-temp.sections.carousel-section';
import { CtaSection } from '@teambit/evangelist-temp.sections.cta';
import { EnterpriseSection } from '@teambit/evangelist-temp.sections.enterprise-section';
import { CommunitySection } from '@teambit/evangelist-temp.sections.community';
import { ComponentsAdvantages } from '@teambit/evangelist-temp.sections.component-advantages';
import { IndependentTeams } from '@teambit/evangelist-temp.sections.independent-teams';
import { TalkToExperts } from '@teambit/evangelist-temp.sections.talk-to-experts';
import { Hero } from '@teambit/evangelist-temp.sections.hero';
import { DevelopComponents } from '@teambit/evangelist-temp.sections.develop-components';
import { ReuseComponents } from '@teambit/evangelist-temp.sections.reuse-components';
import { BuildTogether } from '@teambit/evangelist-temp.sections.build-together';
import { DiscoverComponents } from '@teambit/evangelist-temp.sections.discover-components';

export type HybridHomepageProps = {
	/** placeholder for content, after the first purple background fold. */
	communityCollections?: ReactNode;
	/** placeholder for content, at the bottom of the first purple background fold */
	mainCta?: ReactNode;
	/** show github star count at the community section */
	githubStars?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Full, responsive page, showing the many benefits of bit, in a simple application.
 *
 * Developing this component in isolation allowed us to use new technology not available in the consuming project,
 * namely TypeScript and @testing-library/react.
 * @name HybridHomepage
 */

export class HybridHomepage extends PureComponent<HybridHomepageProps> {
	render() {
		const {
			communityCollections = null,
			mainCta,
			githubStars,
			className,
			...rest
		} = this.props;

		return (
			<div {...rest} className={classNames(backgrounds.bedrock, className)}>
				<div
					className={classNames(
						styles.purpleBackground,
						styles.purpleFold,
						styles.margin180
					)}
				>
					<Hero className={classNames(styles.landingSection, centerColumn)} />

					{mainCta}
				</div>

				{communityCollections}

				<EnterpriseSection className={classNames(centerColumn, styles.foldMargin)} />

				<CarouselSection className={classNames(wideColumn)} />

				<div className={styles.uEllipse}></div>

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<DevelopComponents
						className={classNames(centerColumn, styles.foldMargin)}
					/>

					<ComponentsAdvantages className={classNames(centerColumn)} />
				</div>

				<ReuseComponents className={classNames(centerColumn, styles.foldMargin)} />

				<TalkToExperts className={classNames(centerColumn, styles.foldMargin)} />

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<BuildTogether className={classNames(centerColumn)} />
				</div>

				<DiscoverComponents className={classNames(centerColumn, styles.foldMargin)} />

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<IndependentTeams className={classNames(centerColumn)} />
				</div>

				<CommunitySection
					className={classNames(centerColumn, styles.foldMargin)}
					githubStars={githubStars}
				/>

				<CtaSection className={classNames(centerColumn, styles.foldMargin)} />
			</div>
		);
	}
}
