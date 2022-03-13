import React from 'react';
import { CardProps } from '@teambit/base-ui.surfaces.card';
// @ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

export type DuoComponentBubbleProps = {
	bitId: BitNameId;
	fullScopeName?: boolean;
	baseUrl?: string;
} & CardProps;

export type ScopeBubbleProps = {
	bitId: BitNameId;
	fullScopeName?: boolean;
	baseUrl?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ComponentBubbleProps = {
	bitId: BitNameId;
	baseUrl?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
