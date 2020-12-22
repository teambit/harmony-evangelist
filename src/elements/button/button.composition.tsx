import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { Button } from './button';

export const PrimaryButton = ({ ...rest }) => {
	return (
		<Theme style={{ padding: 10 }}>
			<Button importance="cta" style={{ width: 120 }} {...rest}>
				Primary
			</Button>
		</Theme>
	);
};

export const SecondaryButton = () => {
	return (
		<Theme style={{ padding: 10 }}>
			<Button importance="ghost" style={{ width: 120 }}>
				Secondary
			</Button>
		</Theme>
	);
};

export const NormalButton = ({ ...rest }) => {
	return (
		<Theme style={{ padding: 10 }}>
			<Button style={{ width: 120 }} {...rest}>
				Normal
			</Button>
		</Theme>
	);
};

export const PrimaryLoadingButton = () => {
	return (
		<Theme style={{ padding: 10 }}>
			<Button importance="cta" loading style={{ width: 120 }}>
				Primary
			</Button>
		</Theme>
	);
};

export const SecondaryLoadingButton = () => {
	return (
		<Theme style={{ padding: 10 }}>
			<Button importance="ghost" loading style={{ width: 120 }}>
				Secondary
			</Button>
		</Theme>
	);
};

export const NormalLoadingButton = () => {
	return (
		<Theme style={{ padding: 10 }}>
			<Button loading style={{ width: 120 }}>
				Normal
			</Button>
		</Theme>
	);
};
