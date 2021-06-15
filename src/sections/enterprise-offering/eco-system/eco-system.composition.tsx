import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { EcoSystem } from './eco-system';

export const EcoSystemExample = () => (
	<ThemeCompositions>
		<EcoSystem data-testid="test-ecosystem" />
	</ThemeCompositions>
);

EcoSystemExample.canvas = {
	height: 120,
};
