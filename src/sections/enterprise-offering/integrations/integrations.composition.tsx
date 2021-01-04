import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Integrations } from './integrations';

export const IntegrationsExample = () => (
	<ThemeCompositions>
		<Integrations data-testid="test-integrations" />
	</ThemeCompositions>
);

IntegrationsExample.canvas = {
	height: 180,
};
