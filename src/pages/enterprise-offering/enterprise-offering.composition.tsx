import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
// import { EnterpriseOffering } from './enterprise-offering';

export const EnterpriseOfferingPage = () => (
	<Theme>{/* <EnterpriseOffering data-testid="test-page" /> */}</Theme>
);

EnterpriseOfferingPage.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
