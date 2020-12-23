import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { EvaIconFont } from '@teambit/evangelist.theme.icon-font';

import { XButton } from './x-button';

export const CloseButton = () => (
	<Theme>
		<EvaIconFont query="av92bs" />
		<XButton onClick={() => alert('on click')} data-testid="test-x" />
	</Theme>
);
