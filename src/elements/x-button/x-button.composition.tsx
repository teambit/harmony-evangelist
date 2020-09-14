import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { EvaIconFont } from '@teambit/evangelist.theme.icon-font';

import { XButton } from './x-button';

export function Basic() {
	return (
		<Theme>
			<EvaIconFont query="av92bs" />
			<XButton />
		</Theme>
	);
}
