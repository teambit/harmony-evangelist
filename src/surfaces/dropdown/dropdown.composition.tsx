import React from 'react';
import { Dropdown } from './dropdown';
import { Theme } from '@teambit/base-ui.theme.theme-provider';

export const ForcedOpen = () => (
	<Theme style={{ padding: '11px 11px 70px' }}>
		<Dropdown
			placeholder="placeholder"
			open={true} // force open
		>
			tooltip menu
		</Dropdown>
	</Theme>
);

export const Uncontrolled = () => (
	<Theme style={{ padding: '11px 11px 70px' }}>
		<Dropdown placeholder="placeholder">tooltip menu</Dropdown>
	</Theme>
);
