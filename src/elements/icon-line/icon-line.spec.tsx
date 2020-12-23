import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { IconLineExample } from './icon-line.composition';

it('should render correclty', () => {
	const { getAllByAltText } = render(<IconLineExample />);
	const rendered = getAllByAltText(/logo-.*/);
	expect(rendered).to.exist;
});
