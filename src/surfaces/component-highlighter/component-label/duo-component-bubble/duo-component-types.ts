import React from 'react';
import { CardProps } from '@teambit/base-ui.surfaces.card';
import type { ComponentID } from '@teambit/component-id';

export type DuoComponentBubbleProps = {
	bitId: ComponentID;
	fullScopeName?: boolean;
	baseUrl?: string;
} & CardProps;

export type ScopeBubbleProps = {
	bitId: ComponentID;
	fullScopeName?: boolean;
	baseUrl?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ComponentBubbleProps = {
	bitId: ComponentID;
	baseUrl?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
