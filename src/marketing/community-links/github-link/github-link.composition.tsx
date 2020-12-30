import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { GithubLink } from './github-link';

export const GithubLinkExample = () => (
	<Theme>
		<GithubLink
			href="https://github.com/teambit/bit"
			starCount={500000}
			data-testid="test-link"
		/>
	</Theme>
);
