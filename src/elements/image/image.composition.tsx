import React from 'react';
import { Image } from './image';

export const ImageExample = ({ ...rest }) => (
	<Image
		src="homepage-bit/map.png"
		data-testid="test-img"
		alt="alt world"
		style={{ width: 500 }}
		{...rest}
	/>
);
