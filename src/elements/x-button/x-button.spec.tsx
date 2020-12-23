import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { CloseButton } from './x-button.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<CloseButton />);
	const rendered = getByTestId('test-x');

	expect(rendered).to.exist;
});
