import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { PoweringEnterprise } from './powering-enterprise';

export const PoweringEnterpriseExample = () => (
	<ThemeCompositions>
		<PoweringEnterprise data-testid="test-powering" />
	</ThemeCompositions>
);

PoweringEnterpriseExample.canvas = {
	height: 350,
};
