import React from 'react';
import {BaseIcon} from '@bit/bit.gui.atoms.base-icon';

const iconSetPrefix = 'bitcon';


export function Icon({ className, of: iconName, ...rest }: any) {
	return <BaseIcon of={`${iconSetPrefix}-${iconName}`} className={className} {...rest} />;
}