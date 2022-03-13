import React from 'react';
import { ComponentHighlighter } from './component-highlighter';

const versionMap = {
	'teambit.evangelist/elements/button': '1.0.5',
};

export const HighlighterPreview = () => {
	return (
		<ComponentHighlighter
			active
			baseUrl='https://bit.dev'
			versionMap={versionMap}
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
