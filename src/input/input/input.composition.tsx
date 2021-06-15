import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { Input, TextArea } from './input';

export const InputExample = () => (
	<ThemeCompositions>
		<Input error={false} placeholder="enter text..." data-testid="test-input" />
	</ThemeCompositions>
);

export const InputWithError = () => (
	<ThemeCompositions>
		<Input error={true} data-testid="test-input" />
	</ThemeCompositions>
);

export const TextAreaExample = () => (
	<ThemeCompositions>
		<TextArea error={false} placeholder="multiline text..." data-testid="test-textarea" />
	</ThemeCompositions>
);

export const TextAreaWithError = () => (
	<ThemeCompositions>
		<TextArea error={true} data-testid="test-textarea" />
	</ThemeCompositions>
);

const compositions = [InputExample, InputWithError, TextAreaExample, TextAreaWithError];
// @ts-ignore
compositions.map((comp) => (comp.canvas = { height: 90 }));
