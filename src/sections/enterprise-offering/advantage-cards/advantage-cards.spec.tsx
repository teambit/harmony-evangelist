import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { AdvantageCardsExample } from './advantage-cards.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<AdvantageCardsExample />);
	const rendered = getByTestId('test-cards');

	expect(rendered).to.exist;
});
