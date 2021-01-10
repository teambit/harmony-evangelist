import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SupportChannelsExample } from './support-channels.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SupportChannelsExample />);
	const rendered = getByTestId('test-support');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<SupportChannelsExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render four p element', () => {
	const { container } = render(<SupportChannelsExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(4);
});
