import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { H1, H2, H3, H4, H5, H6 } from './heading';

export const HeadingH1 = () => (
	<ThemeCompositions>
		<H1>Title</H1>
	</ThemeCompositions>
);

export const HeadingH2 = () => (
	<ThemeCompositions>
		<H2>Title</H2>
	</ThemeCompositions>
);

export const HeadingH3 = () => (
	<ThemeCompositions>
		<H3>Title</H3>
	</ThemeCompositions>
);

export const HeadingH4 = () => (
	<ThemeCompositions>
		<H4>Title</H4>
	</ThemeCompositions>
);

export const HeadingH5 = () => (
	<ThemeCompositions>
		<H5>Title</H5>
	</ThemeCompositions>
);

export const HeadingH6 = () => (
	<ThemeCompositions>
		<H6>Title</H6>
	</ThemeCompositions>
);

const compositions = [HeadingH1, HeadingH2, HeadingH3, HeadingH4, HeadingH5, HeadingH6];
// @ts-ignore
compositions.map((comp) => (comp.canvas = { height: 90 }));
