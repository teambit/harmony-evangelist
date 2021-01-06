import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { BuildTogether } from './build-together';

export const BuildTogetherExample = () => (
	<ThemeCompositions>
		<BuildTogether data-testid="test-build" />
	</ThemeCompositions>
);

BuildTogetherExample.canvas = {
	width: 1400,
	height: 400,
	overflow: 'scroll',
};
