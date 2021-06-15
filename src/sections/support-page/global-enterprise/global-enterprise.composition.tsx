import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { GlobalEnterprise } from './global-enterprise';

export const GlobalEnterpriseExample = () => (
	<ThemeCompositions>
		<GlobalEnterprise data-testid="test-global" />
	</ThemeCompositions>
);

GlobalEnterpriseExample.canvas = {
	width: 1400,
	height: 700,
	overflow: 'scroll',
};
