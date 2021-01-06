import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { DiscoverComponents } from './discover-components';

export const DiscoverComponentsExample = () => (
	<ThemeCompositions>
		<DiscoverComponents data-testid="test-discover" />
	</ThemeCompositions>
);

DiscoverComponentsExample.canvas = {
	width: 1400,
	height: 400,
	overflow: 'scroll',
};
