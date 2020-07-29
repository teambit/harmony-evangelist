import React from 'react';
import classNames from 'classnames';
import { Containee, Position } from '@teambit/base-ui-temp.surfaces.abs-container';
import { elevationClass, ElevationHeight } from '@teambit/base-ui-temp.css-components.elevation';
import { roundnessClass, Roundness } from '@teambit/base-ui-temp.css-components.roundness';

import styles from './tooltip-card.module.scss';

type Props = {
	position: Position;
	elevation?: ElevationHeight;
	roundness?: Roundness;
} & React.HTMLAttributes<HTMLDivElement>;

export const TooltipMenu = ({
	position,
	children,
	elevation = 'medium',
	roundness = 'sharp',
	className,
	...rest
}: Props) => {
	return (
		<Containee
			position={position}
			className={classNames(
				styles.menu,
				elevationClass[elevation],
				roundnessClass[roundness],
				className
			)}
			{...rest}
		>
			{children}
		</Containee>
	);
};

TooltipMenu.defaultProps = {
	elevation: 'medium',
	roundness: 'sharp',
};
