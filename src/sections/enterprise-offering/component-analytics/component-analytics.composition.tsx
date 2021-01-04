import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { ComponentAnalytics } from './component-analytics';

export const ComponentAnalyticsExample = () => (
	<ThemeCompositions>
		<ComponentAnalytics data-testid="test-analytics" />
	</ThemeCompositions>
);

ComponentAnalyticsExample.canvas = {
	height: 350,
};
