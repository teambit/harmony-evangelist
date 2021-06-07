import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { brands } from '@teambit/evangelist.theme.brands';
import { CommunitySection } from './community-section';

export const CommunitySectionExample = () => (
	<ThemeCompositions className={brands}>
		<CommunitySection githubStars={12600} data-testid="community-test" />
	</ThemeCompositions>
);

CommunitySectionExample.canvas = {
	height: 430,
};
