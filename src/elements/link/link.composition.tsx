import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { Link } from './link';

export const LinkExample = () => (
	<ThemeCompositions>
		<Link href="https://google.com" data-testid="test-link">
			look it up!
		</Link>
	</ThemeCompositions>
);

export const LinkWithExternal = () => (
	<ThemeCompositions>
		<Link href="https://google.com" external data-testid="test-link">
			look it up!
		</Link>
	</ThemeCompositions>
);

const compositions = [LinkExample, LinkWithExternal];
// @ts-ignore
compositions.map((comp) => (comp.canvas = { height: 90 }));
