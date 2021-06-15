import React from 'react';
import classNames from 'classnames';

import { Link as BaseLink, LinkProps } from '@teambit/base-ui.elements.link';

import styles from './link.module.scss';

/**
 * A concrete link, styled for Evangelist, extending [base link](https://bit.dev/bit/base-ui/elements/link).
 * Accepts all props as html Anchor Element.
 *
 * The link will use these css variables, when available:
 * -   --bit-accent-color, for text color.
 * -   --bit-accent-heavy, for text color on hover.
 * @name Link
 * @example
 * <Link href="https://google.com">look it up!</Link>
 */
export function Link(props: LinkProps) {
	return (
		<BaseLink
			data-bit-id="teambit.evangelist/elements/link"
			{...props}
			className={classNames(props.className, styles.primaryLink)}
		/>
	);
}
