import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { Link } from './link';

export const LinkExample = () => (
	<Theme>
		<Link href="https://google.com" data-testid="test-link">
			look it up!
		</Link>
	</Theme>
);

export const LinkWithExternal = () => (
	<Theme>
		<Link href="https://google.com" external data-testid="test-link">
			look it up!
		</Link>
	</Theme>
);
