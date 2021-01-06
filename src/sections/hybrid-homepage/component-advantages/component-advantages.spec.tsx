import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { ComponentsAdvantagesExample } from './component-advantages.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<ComponentsAdvantagesExample />);
	const rendered = getByTestId('test-advantages');

	expect(rendered).to.exist;
});
it('should render four h3 element', () => {
	const { container } = render(<ComponentsAdvantagesExample />);
	const rendered = container.querySelectorAll('h3');

	expect(rendered.length).to.equal(4);
});
