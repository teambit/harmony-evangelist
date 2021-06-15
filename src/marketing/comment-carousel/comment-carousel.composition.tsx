import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { CommentCarousel } from './comment-carousel';

export const CommentCarouselExample = () => {
	const bitTestimonials = [
		{
			name: 'Barbra',
			description: 'Quality assurance',
			content: 'Better than 4/5 of the market',
			avatar: 'https://static.bit.dev/bit-logo.png',
		},
		{
			name: 'Roberto',
			description: 'Upper middle management',
			content: 'Easy to carry, nice for meetings',
			avatar: 'https://static.bit.dev/bit-logo.png',
		},
		{
			name: 'Barbra',
			description: 'Quality assurance',
			content: 'Better than 4/5 of the market',
			avatar: 'https://static.bit.dev/bit-logo.png',
		},
		{
			name: 'Roberto',
			description: 'Upper middle management',
			content: 'Easy to carry, nice for meetings',
			avatar: 'https://static.bit.dev/bit-logo.png',
		},
	];
	return (
		<ThemeCompositions style={{ width: 800 }}>
			<CommentCarousel content={bitTestimonials} data-testid="test-carousel" />
		</ThemeCompositions>
	);
};
