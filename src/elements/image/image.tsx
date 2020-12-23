import React from 'react';

import { BaseImage, BaseImageProps } from '@teambit/base-ui.elements.image';
import { staticStorageUrl } from '@teambit/base-ui.constants.storage';

export type ImageProps = BaseImageProps;

export function Image({ src, ...rest }: ImageProps) {
	return (
		<BaseImage
			data-bit-id="bit.evangelist/elements/image"
			{...rest}
			src={`${staticStorageUrl}/${src}`}
		/>
	);
}
