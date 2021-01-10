import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { TestimonialExample } from './testimonial.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<TestimonialExample />);
	const rendered = getByTestId('test-testimonial');

	expect(rendered).to.exist;
});
