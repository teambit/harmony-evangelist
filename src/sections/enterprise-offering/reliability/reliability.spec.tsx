import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { ReliabilityExample } from './reliability.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<ReliabilityExample />);
	const rendered = getByTestId('test-reliability');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<ReliabilityExample />);
	const rendered = getByText('Reliable and secure');

	expect(rendered.tagName).to.be.equal('H2');
});
