import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { brands } from '@teambit/evangelist.theme.brands';
import { CommunityLink } from './community-link';

export const BaseCommunityLink = () => (
	<ThemeCompositions className={brands}>
		<CommunityLink href="https://bit.dev" data-testid="test-link" external>
			bit.dev
		</CommunityLink>
	</ThemeCompositions>
);

BaseCommunityLink.canvas = {
	height: 90,
};
