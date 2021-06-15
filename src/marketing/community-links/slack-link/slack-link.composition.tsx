import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { brands } from '@teambit/evangelist.theme.brands';
import { SlackLink } from './slack-link';

export const SlackLinkExample = () => (
	<ThemeCompositions className={brands}>
		<SlackLink
			href="https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg"
			data-testid="test-link"
		/>
	</ThemeCompositions>
);

SlackLinkExample.canvas = {
	height: 90,
};
