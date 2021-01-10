import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SupportDevelopersExample } from './support-developers.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SupportDevelopersExample />);
	const rendered = getByTestId('test-support');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<SupportDevelopersExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render four h3 element', () => {
	const { container } = render(<SupportDevelopersExample />);
	const rendered = container.querySelectorAll('h3');

	expect(rendered.length).to.equal(4);
});
it('should render five p element', () => {
	const { container } = render(<SupportDevelopersExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(5);
});
