import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { CtaSection } from './cta-section';

export const CtaSectionExample = () => (
	<ThemeCompositions>
		<CtaSection data-testid="test-cta" />
	</ThemeCompositions>
);

CtaSectionExample.canvas = {
	height: 70,
};
