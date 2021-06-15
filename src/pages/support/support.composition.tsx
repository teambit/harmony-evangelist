import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { brands } from '@teambit/evangelist.theme.brands';
import { SupportPage } from './support';

export const SupportPageComposition = () => (
	<ThemeCompositions className={brands}>
		<SupportPage data-testid="test-page" />
	</ThemeCompositions>
);

SupportPageComposition.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
