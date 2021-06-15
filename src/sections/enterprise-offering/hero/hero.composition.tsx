import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { Hero } from './hero';

export const HeroExample = () => (
	<ThemeCompositions>
		<Hero data-testid="test-hero" />
	</ThemeCompositions>
);

HeroExample.canvas = {
	height: 520,
};
