import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { EcoSystemExample } from './eco-system.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<EcoSystemExample />);
	const rendered = getByTestId('test-ecosystem');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<EcoSystemExample />);
	const rendered = getByText('Rooted in your ecosystem');

	expect(rendered.tagName).to.be.equal('H2');
});
it('should render p element', () => {
	const { getByText } = render(<EcoSystemExample />);
	const rendered = getByText(/Bit integrates into.*/);

	expect(rendered.tagName).to.be.equal('P');
});
