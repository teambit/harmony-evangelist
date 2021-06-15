import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { brands } from '@teambit/evangelist.theme.brands';
import { TwitterLink } from './twitter-link';

export const TwitterLinkExample = () => (
	<ThemeCompositions className={brands}>
		<TwitterLink href="https://twitter.com/bitdev_" data-testid="test-link" />
	</ThemeCompositions>
);

TwitterLinkExample.canvas = {
	height: 90,
};
