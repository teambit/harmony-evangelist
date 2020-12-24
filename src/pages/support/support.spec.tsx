import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SupportPageComposition } from './support.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SupportPageComposition />);
	const rendered = getByTestId('test-page');

	expect(rendered).to.exist;
});
