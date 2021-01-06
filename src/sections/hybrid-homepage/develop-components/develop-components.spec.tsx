import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { DevelopComponentsExample } from './develop-components.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<DevelopComponentsExample />);
	const rendered = getByTestId('test-develop');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<DevelopComponentsExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render one p element', () => {
	const { container } = render(<DevelopComponentsExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(1);
});
