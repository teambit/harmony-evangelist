import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { EnterpriseSectionExample } from './enterprise-section.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<EnterpriseSectionExample />);
	const rendered = getByTestId('test-enterprise');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<EnterpriseSectionExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render three h4 element', () => {
	const { container } = render(<EnterpriseSectionExample />);
	const rendered = container.querySelectorAll('h4');

	expect(rendered.length).to.equal(3);
});
it('should render four p element', () => {
	const { container } = render(<EnterpriseSectionExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(5);
});
