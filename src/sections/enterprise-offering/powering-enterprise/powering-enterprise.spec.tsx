import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { PoweringEnterpriseExample } from './powering-enterprise.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<PoweringEnterpriseExample />);
	const rendered = getByTestId('test-powering');

	expect(rendered).to.exist;
});
