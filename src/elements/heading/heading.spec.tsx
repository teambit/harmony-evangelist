import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import {
	HeadingH1,
	HeadingH2,
	HeadingH3,
	HeadingH4,
	HeadingH5,
	HeadingH6,
} from './heading.composition';

it('should render h1', () => {
	const { getByText } = render(<HeadingH1 />);
	const rendered = getByText('Title');

	expect(rendered.tagName).to.be.equal('H1');
});

it('should render h2', () => {
	const { getByText } = render(<HeadingH2 />);
	const rendered = getByText('Title');

	expect(rendered.tagName).to.be.equal('H2');
});

it('should render h3', () => {
	const { getByText } = render(<HeadingH3 />);
	const rendered = getByText('Title');

	expect(rendered.tagName).to.be.equal('H3');
});

it('should render h4', () => {
	const { getByText } = render(<HeadingH4 />);
	const rendered = getByText('Title');

	expect(rendered.tagName).to.be.equal('H4');
});

it('should render h5', () => {
	const { getByText } = render(<HeadingH5 />);
	const rendered = getByText('Title');

	expect(rendered.tagName).to.be.equal('H5');
});

it('should render h6', () => {
	const { getByText } = render(<HeadingH6 />);
	const rendered = getByText('Title');

	expect(rendered.tagName).to.be.equal('H6');
});
