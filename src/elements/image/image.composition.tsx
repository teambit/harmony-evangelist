import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { Image } from './image';

export const ImageExample = ({ ...rest }) => (
	<ThemeCompositions>
		<Image
			src="homepage-bit/map.png"
			data-testid="test-img"
			alt="alt world"
			style={{ width: 500 }}
			{...rest}
		/>
	</ThemeCompositions>
);

ImageExample.canvas = {
	height: 250,
};
