import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { XButton } from './x-button';

export const CloseButton = () => (
	<ThemeCompositions>
		<XButton onClick={() => alert('on click')} data-testid="test-x" />
	</ThemeCompositions>
);
