import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { SalesCta } from './sales-cta';

export const SalesCtaExample = () => (
	<ThemeCompositions>
		<SalesCta data-testid="test-sales-cta" />
	</ThemeCompositions>
);

SalesCtaExample.canvas = {
	height: 650,
};
