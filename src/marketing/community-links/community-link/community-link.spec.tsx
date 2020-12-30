import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { BaseCommunityLink } from './community-link.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<BaseCommunityLink />);
	const rendered = getByTestId('test-link');
	expect(rendered).to.exist;
});
it('should render an a element', () => {
	const { getByTestId } = render(<BaseCommunityLink />);
	const rendered = getByTestId('test-link');

	expect(rendered.tagName).to.equal('A');
});
it('should include an href', () => {
	const { getByTestId } = render(<BaseCommunityLink />);
	const rendered = getByTestId('test-link');

	expect(rendered.getAttribute('href')).to.equal('https://bit.dev');
});
