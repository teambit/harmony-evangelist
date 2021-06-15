import React from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { CheckboxIndicator } from './checkbox-indicator';

export function Checked() {
	return (
		<ThemeCompositions>
			<input type="checkbox" defaultChecked /> → <CheckboxIndicator />
		</ThemeCompositions>
	);
}

export function Unchecked() {
	return (
		<ThemeCompositions>
			<input type="checkbox" /> → <CheckboxIndicator />
		</ThemeCompositions>
	);
}

export function DisabledChecked() {
	return (
		<ThemeCompositions>
			<input type="checkbox" disabled defaultChecked /> → <CheckboxIndicator />
		</ThemeCompositions>
	);
}

export function Disabled() {
	return (
		<ThemeCompositions>
			<input type="checkbox" disabled /> → <CheckboxIndicator />
		</ThemeCompositions>
	);
}

export function Large() {
	return (
		<ThemeCompositions style={{ fontSize: 24 }}>
			<input type="checkbox" defaultChecked /> → <CheckboxIndicator />
		</ThemeCompositions>
	);
}

export function Small() {
	return (
		<ThemeCompositions style={{ fontSize: 12 }}>
			<input type="checkbox" defaultChecked /> → <CheckboxIndicator />
		</ThemeCompositions>
	);
}
