import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SalesCtaExample } from './sales-cta.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SalesCtaExample />);
	const rendered = getByTestId('test-sales-cta');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<SalesCtaExample />);
	const rendered = getByText('Let’s talk');

	expect(rendered.tagName).to.be.equal('H4');
});
