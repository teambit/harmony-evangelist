import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
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
	width: 1440,
	height: 400,
};
