import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { TwitterLink } from './twitter-link';

export const TwitterLinkExample = () => (
	<Theme>
		<TwitterLink href="https://twitter.com/bitdev_" data-testid="test-link" />
	</Theme>
);
