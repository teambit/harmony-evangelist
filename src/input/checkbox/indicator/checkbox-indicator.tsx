import React from 'react';
import classnames from 'classnames';
import { Icon } from '@teambit/evangelist.elements.icon';
import {
	CheckboxIndicator as CheckboxIndicatorBase,
	CheckboxIndicatorProps as BaseProps,
} from '@teambit/base-ui.input.checkbox.indicator';

import styles from './checkbox-indicator.module.scss';

export type CheckboxIndicatorProps = BaseProps;

/**
 * Mirrors a preceding checkbox input, with a checkmark icon.
 */
export function CheckboxIndicator(props: CheckboxIndicatorProps) {
	return (
		<CheckboxIndicatorBase
			{...props}
			className={classnames(props.className, styles.checkmarkInputIndicator)}
		>
			<Icon of="check-mark" className={styles.icon} />
		</CheckboxIndicatorBase>
	);
}
