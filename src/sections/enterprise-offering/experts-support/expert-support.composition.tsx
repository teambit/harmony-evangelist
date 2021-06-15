import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { ExpertSupport } from './expert-support';

export const ExpertSupportExample = () => (
	<ThemeCompositions>
		<ExpertSupport data-testid="test-expert-support" />
	</ThemeCompositions>
);

ExpertSupportExample.canvas = {
	height: 650,
};
