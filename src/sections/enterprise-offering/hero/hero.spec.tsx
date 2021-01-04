import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { HeroExample } from './hero.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<HeroExample />);
	const rendered = getByTestId('test-hero');

	expect(rendered).to.exist;
});
it('should render h2 element', () => {
	const { getByText } = render(<HeroExample />);
	const rendered = getByText('The enterprise component platform');

	expect(rendered.tagName).to.be.equal('H1');
});
it('should render p element', () => {
	const { getByText } = render(<HeroExample />);
	const rendered = getByText(/Let your components drive web application.*/);

	expect(rendered.tagName).to.be.equal('P');
});
