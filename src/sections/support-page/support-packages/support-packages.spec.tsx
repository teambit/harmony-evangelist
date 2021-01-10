import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SupportPackagesExample } from './support-packages.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SupportPackagesExample />);
	const rendered = getByTestId('test-support');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<SupportPackagesExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render one p element', () => {
	const { container } = render(<SupportPackagesExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(1);
});
