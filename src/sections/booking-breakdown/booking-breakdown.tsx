import React, { HTMLAttributes } from 'react';

import classNames from 'classnames';

import { H2 } from '../../components/concrete/heading';
import { Paragraph } from '../../components/base/paragraph';
import { Image } from '../../components/concrete/image';
import { PossibleSizes } from '../../constants/sizes';
import { marginCenter } from '../../components/layout/align';

import styles from './booking-breakdown.module.scss';
import { textColumn } from '../../components/layout/grid';

export function BookingBreakdown(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} data-bit-id="sections/booking-breakdown">
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>
					Everything you need to build independent and reusable components
				</H2>
				<Paragraph size={PossibleSizes.lg} className={classNames(styles.subtitle)}>
					Bit provides the most powerful tools and experience to develop, build, test
					and version independent and reusable components. And, it makes it more fun.
				</Paragraph>
			</div>
			<Image alt="bit" src="homepage-bit/2-build.png" fullWidth />
		</div>
	);
}
