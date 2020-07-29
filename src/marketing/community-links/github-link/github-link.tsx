import React, { PureComponent } from 'react';
import classNames from 'classnames';
//@ts-ignore
import numberAbbreviate from 'number-abbreviate';

import styles from './github-link.module.scss';

import { CommunityLink, PrimaryLinkProps } from '@teambit/evangelist-temp.marketing.community-links.community-link';
import { Icon } from '@teambit/evangelist-temp.elements.icon';
import { Image } from '@teambit/evangelist-temp.elements.image';

export type GithubLinkProps = {
	/**
	 * Shows github stars count inside the link.
	 */
	starCount?: number;
} & PrimaryLinkProps;

/**
 * Concrete link to a Github repository, with logo and star count.<br/>
 * Star count automatically shortens into metric prefix, using [number-abbreviate](https://www.npmjs.com/package/number-abbreviate).
 * @name GithubLink
 * @example
 * <GithubLink href="https://github.com/teambit/bit" starCount={500000} />
 */

export class GithubLink extends PureComponent<GithubLinkProps> {
	render() {
		const { className, starCount, ...rest } = this.props;

		return (
			<CommunityLink
				external
				data-bit-id="bit.evangelist/marketing/community-links/github-link"
				className={classNames(styles.githubLink, className)}
				{...rest}
			>
				<Icon of="github-logo" className={styles.icon} />
				<span>teambit/bit</span>
				{starCount && (
					<Image alt="star" src="homepage/star.svg" className={styles.star} />
				)}
				{starCount && <span>{numberAbbreviate(starCount)}</span>}
			</CommunityLink>
		);
	}
}
