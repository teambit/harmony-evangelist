import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { EnterpriseOffering } from './enterprise-offering';

export const EnterpriseOfferingPage = () => (
	<ThemeCompositions>
		<EnterpriseOffering data-testid="test-page" />
	</ThemeCompositions>
);

EnterpriseOfferingPage.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
