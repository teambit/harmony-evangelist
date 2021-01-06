import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { CommunitySectionExample } from './community-section.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<CommunitySectionExample />);
	const rendered = getByTestId('community-test');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<CommunitySectionExample />);
	const rendered = getByText('Join the community');

	expect(rendered.tagName).to.be.equal('H2');
});
