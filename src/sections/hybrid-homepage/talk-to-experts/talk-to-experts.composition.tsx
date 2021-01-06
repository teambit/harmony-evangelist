import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { TalkToExperts } from './talk-to-experts';

export const TalkToExpertsExample = () => (
	<ThemeCompositions>
		<TalkToExperts data-testid="test-talk" />
	</ThemeCompositions>
);

TalkToExpertsExample.canvas = {
	width: 1400,
	height: 300,
	overflow: 'scroll',
};
