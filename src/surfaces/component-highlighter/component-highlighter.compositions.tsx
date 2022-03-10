import React from 'react';
import { ComponentHighlighter } from './component-highlighter';

export const HighlighterPreview = () => {
	return (
		<ComponentHighlighter
			active
			baseUrl='https://bit.dev'
			style={{
				padding: 16,
				fontFamily: 'sans-serif',
			}}
		>
			<div>regular element</div>
			<div data-bit-id="teambit.evangelist/elements/button">highlighted element</div>
		</ComponentHighlighter>
	);
};
