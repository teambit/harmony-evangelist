import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { CommentCarouselExample } from './comment-carousel.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<CommentCarouselExample />);
	const rendered = getByTestId('test-carousel');

	expect(rendered).to.exist;
});
