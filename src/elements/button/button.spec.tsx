import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { PrimaryButton, SecondaryButton, NormalButton } from './button.composition';

it('should render', () => {
	const { getByText } = render(<PrimaryButton />);
	const rendered = getByText('Primary');

	expect(rendered).to.exist;
});

it('should render secondary', () => {
	const { getByText } = render(<SecondaryButton />);
	const rendered = getByText('Secondary');

	expect(rendered).to.exist;
});

it('should pass classname', () => {
	const { getByText } = render(<PrimaryButton className="test-class" />);
	const rendered = getByText('Primary');

	expect(rendered.className).to.include('test-class');
});

it('should use variation html attribute', () => {
	const { getByText } = render(<NormalButton className="test-class" />);
	const rendered = getByText('Normal');

	expect(rendered.getAttribute('data-variation')).to.equal('normal');
});

it('should have "cta" as html attribute, when using cta variation', () => {
	const { getByText } = render(<PrimaryButton importance="cta" className="test-class" />);
	const rendered = getByText('Primary');

	expect(rendered.getAttribute('data-variation')).to.equal('cta');
});

it('should use low elevation by default', () => {
	const { getByText } = render(<PrimaryButton className="test-class" />);
	const rendered = getByText('Primary');

	expect(rendered.className).to.include('low');
});

it('should use specific elevation', () => {
	const { getByText } = render(<PrimaryButton className="test-class" elevation="high" />);
	const rendered = getByText('Primary');

	expect(rendered.className).to.include('high');
});
