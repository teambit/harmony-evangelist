import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { backgrounds } from '@teambit/base-ui.surfaces.background';
import { centerColumn, wideColumn } from '@teambit/base-ui.layout.page-frame';

import { CarouselSection } from '@teambit/evangelist.sections.carousel-section';
import { CtaSection } from '@teambit/evangelist.sections.cta';
import { EnterpriseSection } from '@teambit/evangelist.sections.enterprise-section';
import { CommunitySection } from '@teambit/evangelist.sections.community';
import { ComponentsAdvantages } from '@teambit/evangelist.sections.component-advantages';
import { IndependentTeams } from '@teambit/evangelist.sections.independent-teams';
import { TalkToExperts } from '@teambit/evangelist.sections.talk-to-experts';
import { Hero } from '@teambit/evangelist.sections.hero';
import { DevelopComponents } from '@teambit/evangelist.sections.develop-components';
import { ReuseComponents } from '@teambit/evangelist.sections.reuse-components';
import { BuildTogether } from '@teambit/evangelist.sections.build-together';
import { DiscoverComponents } from '@teambit/evangelist.sections.discover-components';
import { EnterpriseLogos } from '@teambit/evangelist.marketing.enterprise-logos';

export type HybridHomepageProps = {
	/** placeholder for content, after the first purple background fold. */
	communityScopes?: ReactNode;
	/** placeholder for content, at the bottom of the first purple background fold */
	mainCta?: ReactNode;
	/** show github star count at the community section */
	githubStars?: number;
	/** handles 'book meeting' call to action */
	onBookMeeting?: () => any | Promise<any>;
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
			communityScopes = null,
			mainCta,
			githubStars,
			onBookMeeting,
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
					<Hero className={classNames(styles.landingSection)} />

					{mainCta}
				</div>

				{communityScopes}

				<EnterpriseSection className={classNames(centerColumn, styles.margin100)} />

				<EnterpriseLogos className={styles.margin130} />

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

				<TalkToExperts
					className={classNames(centerColumn, styles.foldMargin)}
					onBookMeeting={onBookMeeting}
				/>

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
