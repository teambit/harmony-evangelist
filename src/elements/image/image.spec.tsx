import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { ImageExample } from './image.composition';

it('should render', () => {
	const { getByTestId } = render(<ImageExample />);
	const rendered = getByTestId('test-img');

	expect(rendered.tagName).to.equal('IMG');
	expect(rendered.getAttribute('alt')).to.equal('alt world');
});

it('should pass classname', () => {
	const { getByTestId } = render(<ImageExample className="testclass" />);
	const rendered = getByTestId('test-img');

	expect(rendered.className).to.include('testclass');
});

it('should prefix src with storageUrl', () => {
	const { getByTestId } = render(<ImageExample />);
	const rendered = getByTestId('test-img');

	expect(rendered.getAttribute('src')).to.equal('staticStorageUrl/homepage-bit/map.png');
});

it('should set fullwidth, when props have fullwidth', () => {
	const { getByTestId } = render(<ImageExample fullWidth />);
	const rendered = getByTestId('test-img');

	expect(rendered.className).to.include('fullWidth');
});
