import React from 'react';
import { IconLine } from './icon-line';

export const IconLineExample = () => (
	<IconLine
		icons={[
			'logo-react',
			'logo-vue',
			'logo-angular',
			'logo-web-components',
			'logo-ts',
			'logo-js',
		]}
		data-testid="test-iconline"
	/>
);
