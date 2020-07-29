import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@teambit/base-ui-temp.text.paragraph';
import { PossibleSizes } from '@teambit/base-ui-temp.theme.sizes';
import { text } from '@teambit/base-ui-temp.layout.align';
import { Grid } from '@teambit/base-ui-temp.layout.grid-component';
import { mutedText } from '@teambit/base-ui-temp.text.muted-text';

import { H2 } from '@teambit/evangelist-temp.elements.heading';
import { Image } from '@teambit/evangelist-temp.elements.image';
import { Icon } from '@teambit/evangelist-temp.elements.icon';
import { links } from '@teambit/evangelist-temp.content.links';

import styles from './support-channels.module.scss';
import { SlackLink } from '@teambit/evangelist-temp.marketing.community-links.slack-link';
import { GithubLink } from '@teambit/evangelist-temp.marketing.community-links.github-link';
import { CommunityLink } from '@teambit/evangelist-temp.marketing.community-links.community-link';
import {ChannelButtonCta} from './support-channel-cta';

type SupportChannelsProps = {} & HTMLAttributes<HTMLElement>;

/**
 * Support channels section for specifying all the ways to contact Bit's support.
 * @name SupportChannels
 */
export function SupportChannels(props: SupportChannelsProps) {
	const { className, ...rest } = props;
	const channelsData = [
		{
			title: 'Slack',
			subTitle: 'Chat with the team and the community on Slack.',
			button: <SlackLink className={styles.channelButton} href={links.slack} />,
		},
		{
			title: 'Email',
			subTitle: 'Open a support ticket and we’ll respond quickly.',
			icon: 'email',
			button: (
				<CommunityLink className={classNames(styles.channelButton, styles.email)} href="/support">
					<Icon of="email" className={styles.emailIcon} />
					Contact support
				</CommunityLink>
			),
		},
		{
			title: 'GitHub',
			subTitle: 'Open an issue or contribute OSS on GitHub.',
			button: <GithubLink className={styles.channelButton} href={links.github} />,
		},
	];

	return (
		<Grid
			colMd={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/support-page/support-channels"
			className={classNames(
				className,
				text.center,
				text.md.left,
				styles.mainGrid,
			)}
		>
			<div className={classNames(styles.content)}>
				<H2 size={PossibleSizes.sm}>Any way you choose</H2>
				<Paragraph size={PossibleSizes.lg} className={classNames(mutedText, styles.mainParagraph)}>
					Get help quickly in Slack, Email, GitHub or any other way. Our team is here
					to help you any way you choose.
				</Paragraph>

				<div>
					{channelsData.map((channel, index) => (
						<ChannelButtonCta
							title={channel.title}
							key={index}
							subTitle={channel.subTitle}
						>
							{channel.button}
						</ChannelButtonCta>
					))}
				</div>
			</div>
			<Image
				className={styles.image}
				alt={'alt'}
				src={'support-page/Illustrations/channels-section.svg'}
			/>
		</Grid>
	);
}
