import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { GlobalEnterpriseExample } from './global-enterprise.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<GlobalEnterpriseExample />);
	const rendered = getByTestId('test-global');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<GlobalEnterpriseExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render one h3 element', () => {
	const { container } = render(<GlobalEnterpriseExample />);
	const rendered = container.querySelectorAll('h3');

	expect(rendered.length).to.equal(4);
});
