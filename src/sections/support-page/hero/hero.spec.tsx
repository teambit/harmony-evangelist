import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { HeroExample } from './hero.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<HeroExample />);
	const rendered = getByTestId('test-hero');

	expect(rendered).to.exist;
});
it('should render one h1 element', () => {
	const { container } = render(<HeroExample />);
	const rendered = container.querySelectorAll('h1');

	expect(rendered.length).to.equal(1);
});
it('should render one p element', () => {
	const { container } = render(<HeroExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(1);
});
it('should render two button element', () => {
	const { container } = render(<HeroExample />);
	const rendered = container.querySelectorAll('button');

	expect(rendered.length).to.equal(2);
});
