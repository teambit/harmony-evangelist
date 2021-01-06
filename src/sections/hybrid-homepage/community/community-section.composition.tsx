import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { CommunitySection } from './community-section';

export const CommunitySectionExample = () => (
	<ThemeCompositions>
		<CommunitySection githubStars={12600} data-testid="community-test" />
	</ThemeCompositions>
);

CommunitySectionExample.canvas = {
	height: 430,
};
