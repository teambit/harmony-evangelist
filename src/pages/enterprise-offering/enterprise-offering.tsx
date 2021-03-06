import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { centerColumn, textColumn } from '@teambit/base-ui.layout.page-frame';
import { marginCenter, text } from '@teambit/base-ui.layout.align';
import { backgrounds } from '@teambit/base-ui.surfaces.background';

import { Hero } from '@teambit/evangelist.sections.enterprise-offering.hero';
import { PoweringEnterprise } from '@teambit/evangelist.sections.enterprise-offering.powering-enterprise';
import { AdvantageCards } from '@teambit/evangelist.sections.enterprise-offering.advantage-cards';
import { Reliability } from '@teambit/evangelist.sections.enterprise-offering.reliability';
import { EcoSystem } from '@teambit/evangelist.sections.enterprise-offering.eco-system';
import { Integrations } from '@teambit/evangelist.sections.enterprise-offering.integrations';
import { ComponentAnalytics } from '@teambit/evangelist.sections.enterprise-offering.component-analytics';
import { ExpertSupport } from '@teambit/evangelist.sections.enterprise-offering.experts-support';
import {
	SalesCta,
	ContactValues,
} from '@teambit/evangelist.sections.enterprise-offering.sales-cta';
import { EnterpriseBullets } from '@teambit/evangelist.sections.enterprise-offering.enterprise-bullets'
import { margin } from '@teambit/evangelist.layout.experimental.spacing';
import { EnterpriseLogos } from '@teambit/evangelist.marketing.enterprise-logos';

import styles from './enterprise-offering.module.scss';

export type EnterpriseOfferingProps = {
	/** handles "contact us" form submission. Return a promise to show loader */
	onSubmitCta?: (values: ContactValues) => any | Promise<any>;
	/** handles meeting call to action. Return a promise to show loader */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A full, responsive page, detailing Bit's offering for enterprises.
 * @name EnterpriseOffering
 */
export function EnterpriseOffering(props: EnterpriseOfferingProps) {
	const { onBookMeeting, onSubmitCta, className, ...rest } = props;

	return (
		<div
			{...rest}
			className={classNames(styles.enterpriseOffering, backgrounds.bedrock, className)}
		>
			<div className={classNames(styles.gradient00, styles.paddingTop130)}>
				<Hero
					onBookMeeting={onBookMeeting}
					className={classNames(centerColumn, styles.foldMargin)}
				/>

				<div className={classNames(styles.curveWhite, styles.curveMargin)} />
			</div>

			<PoweringEnterprise className={classNames(centerColumn, margin[180])} />

			<EnterpriseLogos className={styles.margin160} />

			<EnterpriseBullets className={classNames(centerColumn, margin[180])} />

			<div className={styles.gradient01}>
				<AdvantageCards className={classNames(centerColumn, styles.foldMarginPlus)} />

				<div className={classNames(styles.curveWhite, styles.curveMargin)} />
			</div>

			<Reliability
				className={classNames(centerColumn, styles.foldMargin, styles.paddingTop30)}
			/>

			<div className={classNames(styles.curveCloud, styles.curveMargin)} />

			<div className={classNames(styles.gradient02, styles.paddingTop30)}>
				<EcoSystem className={classNames(centerColumn, text.center)} />
				<Integrations className={classNames(margin[80])} />
				<ComponentAnalytics className={centerColumn} />
			</div>
			<div className={classNames(styles.supportCirclesBg, styles.circlesMargin)}>
				<ExpertSupport
					className={classNames(textColumn, marginCenter, styles.expertSupport)}
				/>
				<SalesCta
					onSubmitCta={onSubmitCta}
					onBookMeeting={onBookMeeting}
					className={classNames(marginCenter, centerColumn)}
				/>
			</div>
		</div>
	);
}
