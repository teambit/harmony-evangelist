import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ReuseComponents } from './reuse-components';

export const ReuseComponentsExample = () => (
	<ThemeCompositions>
		<ReuseComponents data-testid="test-reuse" />
	</ThemeCompositions>
);

ReuseComponentsExample.canvas = {
	width: 1400,
	height: 600,
	overflow: 'scroll',
};
