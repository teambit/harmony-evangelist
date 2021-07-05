import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { CarouselSection } from './carouselSection';

export const CarouselSectionExample = () => (
	<ThemeCompositions
		style={{ display: 'block', width: 1440, maxWidth: '100vw', minHeight: 410 }}
	>
		<CarouselSection data-testid="test-carousel" />
	</ThemeCompositions>
);
