import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { Button } from './button';

export const PrimaryButton = ({ ...rest }) => {
	return (
		<ThemeCompositions>
			<Button importance="cta" style={{ width: 120 }} {...rest}>
				Primary
			</Button>
		</ThemeCompositions>
	);
};

export const SecondaryButton = () => {
	return (
		<ThemeCompositions>
			<Button importance="ghost" style={{ width: 120 }}>
				Secondary
			</Button>
		</ThemeCompositions>
	);
};

export const NormalButton = ({ ...rest }) => {
	return (
		<ThemeCompositions>
			<Button style={{ width: 120 }} {...rest}>
				Normal
			</Button>
		</ThemeCompositions>
	);
};

export const PrimaryLoadingButton = () => {
	return (
		<ThemeCompositions>
			<Button importance="cta" loading style={{ width: 120 }}>
				Primary
			</Button>
		</ThemeCompositions>
	);
};

export const SecondaryLoadingButton = () => {
	return (
		<ThemeCompositions>
			<Button importance="ghost" loading style={{ width: 120 }}>
				Secondary
			</Button>
		</ThemeCompositions>
	);
};

export const NormalLoadingButton = () => {
	return (
		<ThemeCompositions>
			<Button loading style={{ width: 120 }}>
				Normal
			</Button>
		</ThemeCompositions>
	);
};

const compositions = [
	PrimaryButton,
	SecondaryButton,
	NormalButton,
	PrimaryLoadingButton,
	SecondaryLoadingButton,
	NormalLoadingButton,
];
// @ts-ignore
compositions.map((comp) => (comp.canvas = { height: 90 }));
