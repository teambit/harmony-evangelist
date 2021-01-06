import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ComponentsAdvantages } from './component-advantages';

export const ComponentsAdvantagesExample = () => (
	<ThemeCompositions>
		<ComponentsAdvantages data-testid="test-advantages" />
	</ThemeCompositions>
);

ComponentsAdvantagesExample.canvas = {
	width: 1400,
	height: 400,
	overflow: 'scroll',
};
