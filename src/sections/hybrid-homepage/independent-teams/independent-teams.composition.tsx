import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { IndependentTeams } from './independent-teams';

export const IndependentTeamsExample = () => (
	<ThemeCompositions>
		<IndependentTeams data-testid="test-teams" />
	</ThemeCompositions>
);

IndependentTeamsExample.canvas = {
	width: 1400,
	height: 600,
	overflow: 'scroll',
};
