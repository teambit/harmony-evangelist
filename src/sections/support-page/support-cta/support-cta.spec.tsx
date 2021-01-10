import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SupportCtaExample } from './support-cta.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SupportCtaExample />);
	const rendered = getByTestId('test-support');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<SupportCtaExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render one p element', () => {
	const { container } = render(<SupportCtaExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(1);
});
it('should render two button element', () => {
	const { container } = render(<SupportCtaExample />);
	const rendered = container.querySelectorAll('button');

	expect(rendered.length).to.equal(2);
});
