import React from 'react';
import classnames from 'classnames';
import { Icon } from '@teambit/evangelist.elements.icon';

import styles from './x-button.module.scss';

export type XButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function XButton(props: XButtonProps) {
	return (
		<button {...props} className={classnames(styles.xButton, props.className)}>
			<Icon of="x-close" />
		</button>
	);
}
