import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { SlackLink } from './slack-link';

export const SlackLinkExample = () => (
	<Theme>
		<SlackLink
			href="https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg"
			data-testid="test-link"
		/>
	</Theme>
);
