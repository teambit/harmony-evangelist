import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { CommunityLink } from './community-link';

export const BaseCommunityLink = () => (
	<Theme>
		<CommunityLink href="https://bit.dev" data-testid="test-link" external>
			bit.dev
		</CommunityLink>
	</Theme>
);
