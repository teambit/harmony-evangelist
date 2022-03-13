import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

// @ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

import { DuoComponentBubble } from './duo-component-bubble';
import { DefaultLabel } from './default-label';

export type ComponentLabelProps = {
	/** Id of the component. Will show nothing if id is missing, and will show text only when id is not a valid bit-id */
	bitId?: string;
	/** Explicitly set component version, and override any id that is part of the bit id. */
	versionOverride?: string;
	/** Show full scope name, including owner */
	fullScopeName?: boolean;
	/** base url for links. leave undefined for relative links */
	baseUrl?: string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Given a component id, shows a label for it and its scope, with a link to its bit.dev entry.
 * @name ComponentLabel
 * @example
 * <ComponentLabel bitId="kutorg.nerv/atoms/lcl" versionOverride="1.5.3" />
 */
export function ComponentLabel(props: ComponentLabelProps) {
	const { bitId, versionOverride, fullScopeName, className, baseUrl, ...rest } = props;

	if (!bitId) return null;

	const parsed = BitNameId.fromBitId(bitId);

	// local or malformed component ids may fail parsing
	if (!parsed) {
		return (
			<DefaultLabel elevation="medium" className={className} {...rest}>
				{bitId}
			</DefaultLabel>
		);
	}

	if (versionOverride) parsed.version = versionOverride;

	return (
		<DuoComponentBubble
			bitId={parsed}
			elevation="medium"
			className={classNames(className)}
			fullScopeName={fullScopeName}
			baseUrl={baseUrl}
			{...rest}
		/>
	);
}

ComponentLabel.defaultProps = {
	fullScopeName: true,
};
