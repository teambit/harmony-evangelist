import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { HybridHomepage } from './hybrid-homepage';

export const HybridHomePageComposition = () => (
	<ThemeCompositions>
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
