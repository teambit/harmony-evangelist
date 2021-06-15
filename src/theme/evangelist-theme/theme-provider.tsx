import React from 'react';
import classNames from 'classnames';

import { Theme as BaseTheme } from '@teambit/base-ui.theme.theme-provider';
import { brands } from '@teambit/evangelist.theme.brands';

import { headingFontSize, textFontSize } from '@teambit/base-ui.theme.size-definition';
import { headingMargins } from '@teambit/base-ui.theme.heading-margin-definition';
import texts from './texts.module.scss';

export type ThemeProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Marketing style customizations, added on top of the regular theme.
 * (some of these are already included in the base-ui theme, but they will be separated in the future)
 */
export const EvangelistThemeAddons = classNames(
	brands,
	headingFontSize,
	headingMargins,
	textFontSize,
	texts.defaults
);

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
		<BaseTheme {...props} className={classNames(props.className, EvangelistThemeAddons)} />
	);
}
