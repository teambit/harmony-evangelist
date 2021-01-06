import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { TalkToExpertsExample } from './talk-to-experts.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<TalkToExpertsExample />);
	const rendered = getByTestId('test-talk');

	expect(rendered).to.exist;
});
it('should render one h2 element', () => {
	const { container } = render(<TalkToExpertsExample />);
	const rendered = container.querySelectorAll('h2');

	expect(rendered.length).to.equal(1);
});
it('should render one p element', () => {
	const { container } = render(<TalkToExpertsExample />);
	const rendered = container.querySelectorAll('p');

	expect(rendered.length).to.equal(1);
});
it('should render one button element', () => {
	const { container } = render(<TalkToExpertsExample />);
	const rendered = container.querySelectorAll('button');

	expect(rendered.length).to.equal(1);
});
