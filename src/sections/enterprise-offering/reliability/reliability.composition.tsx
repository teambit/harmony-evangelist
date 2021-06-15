import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { Reliability } from './reliability';

export const ReliabilityExample = () => (
	<ThemeCompositions>
		<Reliability data-testid="test-reliability" />
	</ThemeCompositions>
);

ReliabilityExample.canvas = {
	height: 650,
};
