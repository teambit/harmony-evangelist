import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { HybridHomepage } from './hybrid-homepage';

export const HybridHomePageComposition = () => (
	<Theme>
		<HybridHomepage githubStars={12600} />
	</Theme>
);

HybridHomePageComposition.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
