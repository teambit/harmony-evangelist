import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { IndependentTeamsExample } from './independent-teams.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<IndependentTeamsExample />);
	const rendered = getByTestId('test-teams');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<IndependentTeamsExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render three h5 element', () => {
	const { container } = render(<IndependentTeamsExample />);
	const rendered = container.querySelectorAll('h5');

	expect(rendered.length).to.equal(3);
});
it('should render four p element', () => {
	const { container } = render(<IndependentTeamsExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(4);
});
