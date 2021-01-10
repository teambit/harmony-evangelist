import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { TwitterCardExample } from './twitter-card.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<TwitterCardExample />);
	const rendered = getByTestId('test-twitter-card');

	expect(rendered).to.exist;
});
it('should render one h3 element', () => {
	const { container } = render(<TwitterCardExample />);
	const rendered = container.querySelectorAll('h3');

	expect(rendered.length).to.equal(1);
});
it('should render two image element', () => {
	const { container } = render(<TwitterCardExample />);
	const rendered = container.querySelectorAll('img');

	expect(rendered.length).to.equal(2);
});
it('should render one p element', () => {
	const { container } = render(<TwitterCardExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(1);
});
