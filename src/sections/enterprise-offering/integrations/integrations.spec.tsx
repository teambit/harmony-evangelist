import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { IntegrationsExample } from './integrations.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<IntegrationsExample />);
	const rendered = getByTestId('test-integrations');

	expect(rendered).to.exist;
});
