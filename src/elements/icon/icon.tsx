import React from 'react';

import { BaseIcon, BaseIconProps } from '@teambit/base-ui.elements.icon';

const iconSetPrefix = 'bitcon';

export type IconProps = BaseIconProps;

export function Icon({ className, of: iconName, ...rest }: IconProps) {
	return (
		<BaseIcon
			of={`${iconSetPrefix}-${iconName}`}
			className={className}
			data-bit-id="bit.evangelist/elements/icon"
			{...rest}
		/>
	);
}
