import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { TwitterCard } from './twitter-card';

export const TwitterCardExample = () => (
	<ThemeCompositions style={{ display: 'inline-block' }}>
		<TwitterCard
			title="@bitdev_"
			image="bit-logo.png"
			verified={true}
			data-testid="test-twitter-card"
		>
			This is my tweet
		</TwitterCard>
	</ThemeCompositions>
);
