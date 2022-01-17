import React, { isValidElement } from 'react';
import classNames from 'classnames';
import { CheckboxIndicator } from '@teambit/evangelist.input.checkbox.indicator';
import {
	CheckboxLabel as CheckboxLabelBase,
	CheckboxLabelProps as BaseProps,
} from '@teambit/base-ui.input.checkbox.label';
import styles from './checkbox-label.module.scss';

export type CheckboxLabelProps = BaseProps;

/** A styled checkbox with text. */
export function CheckboxLabel({ children, className, ...rest }: BaseProps) {
	const child = isValidElement(children) || !!children ? children : <span>{children}</span>;

	return (
		<CheckboxLabelBase
			{...rest}
			className={classNames(styles.checkboxLabel, className)}
			indicator={<CheckboxIndicator />}
		>
			{child}
		</CheckboxLabelBase>
	);
}
