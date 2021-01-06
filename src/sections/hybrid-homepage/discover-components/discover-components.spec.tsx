import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { DiscoverComponentsExample } from './discover-components.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<DiscoverComponentsExample />);
	const rendered = getByTestId('test-discover');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<DiscoverComponentsExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render three h3 element', () => {
	const { container } = render(<DiscoverComponentsExample />);
	const rendered = container.querySelectorAll('h3');

	expect(rendered.length).to.equal(3);
});
it('should render four p element', () => {
	const { container } = render(<DiscoverComponentsExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(4);
});
