import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { TwitterCard } from './twitter-card';

export const TwitterCardExample = () => (
	<ThemeCompositions style={{ maxWidth: 250 }}>
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
