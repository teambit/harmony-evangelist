import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Hero } from './hero';

export const HeroExample = () => (
	<ThemeCompositions>
		<Hero data-testid="test-hero" />
	</ThemeCompositions>
);

HeroExample.canvas = {
	width: 1400,
	height: 600,
	overflow: 'scroll',
};
