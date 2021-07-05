import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { EnterpriseSection } from './enterprise-section';

export const EnterpriseSectionExample = () => (
	<ThemeCompositions>
		<EnterpriseSection data-testid="test-enterprise" />
	</ThemeCompositions>
);

EnterpriseSectionExample.canvas = {
	width: 1440,
};
