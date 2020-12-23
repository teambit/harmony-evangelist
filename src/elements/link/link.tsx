import React from 'react';
import classNames from 'classnames';

import { Link as BaseLink, LinkProps } from '@teambit/base-ui.elements.link';

import styles from './link.module.scss';

export function Link(props: LinkProps) {
	return (
		<BaseLink
			data-bit-id="bit.evangelist/elements/link"
			{...props}
			className={classNames(props.className, styles.primaryLink)}
		/>
	);
}
