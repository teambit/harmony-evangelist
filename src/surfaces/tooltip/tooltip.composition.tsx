import React from 'react';
import { TooltipDrawer } from './tooltip-drawer';
import { Theme } from '@teambit/base-ui.theme.theme-provider';

export const ForcedOpen = () => (
	<Theme style={{ padding: '11px 11px 80px', maxWidth: 100 }}>
		<TooltipDrawer
			placeholder="placeholder"
			open={true} // force open
		>
			tooltip menu
		</TooltipDrawer>
	</Theme>
);
