import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { SlackLinkExample } from './slack-link.composition';

it('should render correctly', () => {
	const { getByTestId } = render(<SlackLinkExample />);
	const rendered = getByTestId('test-link');
	expect(rendered).to.exist;
});
it('should render an a element', () => {
	const { getByTestId } = render(<SlackLinkExample />);
	const rendered = getByTestId('test-link');

	expect(rendered.tagName).to.equal('A');
});
it('should include an href', () => {
	const { getByTestId } = render(<SlackLinkExample />);
	const rendered = getByTestId('test-link');

	expect(rendered.getAttribute('href')).to.equal(
		'https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg'
	);
});
