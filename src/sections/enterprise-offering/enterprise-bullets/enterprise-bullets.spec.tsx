import React from 'react';
import { render } from '@testing-library/react';
import { EnterpriseBulletsExample } from './enterprise-bullets.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<EnterpriseBulletsExample />);
	const rendered = getByTestId('test-bullets');

	expect(rendered).toBeTruthy();
});
