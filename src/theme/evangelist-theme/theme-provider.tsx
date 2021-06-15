import React from 'react';
import classNames from 'classnames';

import { Theme as BaseTheme } from '@teambit/base-ui.theme.theme-provider';
import { brands } from '@teambit/evangelist.theme.brands';
import texts from './texts.module.scss';

export type ThemeProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: ThemeProps) {
	return (
		<BaseTheme {...props} className={classNames(props.className, brands, texts.defaults)} />
	);
}
