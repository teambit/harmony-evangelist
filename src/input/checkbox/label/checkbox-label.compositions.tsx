import React, { useState } from 'react';
import { ThemeCompositions } from '@teambit/evangelist.theme.evangelist-theme';
import { CheckboxLabel } from './checkbox-label';

export function Checked() {
	return (
		<ThemeCompositions>
			<CheckboxLabel defaultChecked> Checkmarbox with a label</CheckboxLabel>
		</ThemeCompositions>
	);
}

export function Unchecked() {
	return (
		<ThemeCompositions>
			<CheckboxLabel> Check mark box with a label</CheckboxLabel>
		</ThemeCompositions>
	);
}

export function ControlledCheckmarkBox() {
	const [state, setState] = useState(false);

	return (
		<ThemeCompositions>
			<CheckboxLabel onInputChanged={(e) => setState(e.target.checked)} checked={state}>
				{' '}
				Check mark box with a label
			</CheckboxLabel>
			<div>→ {state ? 'checked' : 'unchecked'}</div>
		</ThemeCompositions>
	);
}

export function DisabledCheckmarkBox() {
	return (
		<ThemeCompositions>
			<CheckboxLabel disabled>
				<span> disabled</span>
			</CheckboxLabel>
		</ThemeCompositions>
	);
}

export function DisabledAndChecked() {
	return (
		<ThemeCompositions>
			<CheckboxLabel disabled defaultChecked>
				<span> disabled and checked </span>
			</CheckboxLabel>
		</ThemeCompositions>
	);
}

export function Large() {
	return <CheckboxLabel style={{ fontSize: 24 }}> large</CheckboxLabel>;
}

export function Small() {
	return <CheckboxLabel style={{ fontSize: 12 }}> small</CheckboxLabel>;
}