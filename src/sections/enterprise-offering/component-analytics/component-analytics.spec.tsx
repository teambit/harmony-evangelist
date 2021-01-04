import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { ComponentAnalyticsExample } from './component-analytics.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<ComponentAnalyticsExample />);
	const rendered = getByTestId('test-analytics');

	expect(rendered).to.exist;
});
