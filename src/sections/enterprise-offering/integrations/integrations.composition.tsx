import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { Integrations } from './integrations';

export const IntegrationsExample = () => (
	<ThemeCompositions>
		<Integrations data-testid="test-integrations" />
	</ThemeCompositions>
);

IntegrationsExample.canvas = {
	height: 180,
};
