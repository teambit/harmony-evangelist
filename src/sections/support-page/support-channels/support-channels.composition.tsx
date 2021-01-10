import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { SupportChannels } from './support-channels';

export const SupportChannelsExample = () => (
	<ThemeCompositions>
		<SupportChannels data-testid="test-support" />
	</ThemeCompositions>
);

SupportChannelsExample.canvas = {
	width: 1400,
	height: 550,
	overflow: 'scroll',
};
