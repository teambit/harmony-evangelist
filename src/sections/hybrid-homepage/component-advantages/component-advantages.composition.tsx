import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { ComponentsAdvantages } from './component-advantages';

export const ComponentsAdvantagesExample = () => (
	<ThemeCompositions>
		<ComponentsAdvantages data-testid="test-advantages" />
	</ThemeCompositions>
);

ComponentsAdvantagesExample.canvas = {
	width: 1440,
	height: 400,
};
