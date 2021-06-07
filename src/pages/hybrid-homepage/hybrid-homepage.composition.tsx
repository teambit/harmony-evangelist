import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { brands } from '@teambit/evangelist.theme.brands';
import { HybridHomepage } from './hybrid-homepage';

export const HybridHomePageComposition = () => (
	<ThemeCompositions className={brands}>
		<HybridHomepage
			githubStars={12600}
			onBookMeeting={() => alert('function to book a meeting')}
		/>
	</ThemeCompositions>
);

HybridHomePageComposition.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
