import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ExpertSupport } from './expert-support';

export const ExpertSupportExample = () => (
	<ThemeCompositions>
		<ExpertSupport data-testid="test-expert-support" />
	</ThemeCompositions>
);

ExpertSupportExample.canvas = {
	height: 650,
};
