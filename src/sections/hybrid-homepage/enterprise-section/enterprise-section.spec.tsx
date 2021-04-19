import React from 'react';
import { render } from '@testing-library/react';
import { EnterpriseSectionExample } from './enterprise-section.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<EnterpriseSectionExample />);
	const rendered = getByTestId('test-enterprise');

	expect(rendered).toBeTruthy();
});
it('should render one h2 element', () => {
	const { container } = render(<EnterpriseSectionExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).toBe(1);
});
it('should render one p element', () => {
	const { container } = render(<EnterpriseSectionExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).toBe(1);
});
