import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { SupportPage } from './support';

export const SupportPageComposition = () => (
	<Theme>
		<SupportPage data-testid="test-page" />
	</Theme>
);

SupportPageComposition.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
