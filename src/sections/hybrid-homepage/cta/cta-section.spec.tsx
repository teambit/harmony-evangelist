import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { CtaSectionExample } from './cta-section.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<CtaSectionExample />);
	const rendered = getByTestId('test-cta');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<CtaSectionExample />);
	const rendered = getByText('Ready to try Bit?');

	expect(rendered.tagName).to.be.equal('H2');
});
