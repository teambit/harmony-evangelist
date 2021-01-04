import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { ExpertSupportExample } from './expert-support.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<ExpertSupportExample />);
	const rendered = getByTestId('test-expert-support');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<ExpertSupportExample />);
	const rendered = getByText('World-class support by hands-on experts');

	expect(rendered.tagName).to.be.equal('H2');
});
