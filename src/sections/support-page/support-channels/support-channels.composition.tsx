import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { brands } from '@teambit/evangelist.theme.brands';
import { SupportChannels } from './support-channels';

export const SupportChannelsExample = () => (
	<ThemeCompositions className={brands}>
		<SupportChannels data-testid="test-support" />
	</ThemeCompositions>
);
