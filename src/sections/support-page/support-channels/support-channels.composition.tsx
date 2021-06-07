import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { brands } from '@teambit/evangelist.theme.brands';
import { SupportChannels } from './support-channels';

export const SupportChannelsExample = () => (
	<ThemeCompositions className={brands}>
		<SupportChannels data-testid="test-support" />
	</ThemeCompositions>
);

SupportChannelsExample.canvas = {
	width: 1400,
	height: 550,
	overflow: 'scroll',
};
