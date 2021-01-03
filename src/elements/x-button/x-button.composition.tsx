import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { XButton } from './x-button';

export const CloseButton = () => (
	<ThemeCompositions>
		<XButton onClick={() => alert('on click')} data-testid="test-x" />
	</ThemeCompositions>
);

CloseButton.canvas = {
	height: 90,
};
