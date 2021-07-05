import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { IndependentTeams } from './independent-teams';

export const IndependentTeamsExample = () => (
	<ThemeCompositions>
		<IndependentTeams data-testid="test-teams" />
	</ThemeCompositions>
);

IndependentTeamsExample.canvas = {
	width: 1440,
	height: 600,
};
