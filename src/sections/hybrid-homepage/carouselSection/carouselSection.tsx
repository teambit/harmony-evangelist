import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@teambit/base-ui.theme.sizes';

import { textColumn } from '@teambit/base-ui.layout.page-frame';
import { marginCenter } from '@teambit/base-ui.layout.align';

import { CommentCarousel } from '@teambit/evangelist.marketing.comment-carousel';
import { bitTestimonials } from '@teambit/evangelist.content.bit-testimonials';
import { H2 } from '@teambit/evangelist.elements.heading';

import styles from './carouselSection.module.scss';

/**
 * @name CarouselSection
 * @description
 * A section showing real users testimonials about the product.
 * Using **CommentCarousel** (react-slick), and content from **bit-testimonials**.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={props.className}>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm} className={styles.heading}>
					Trusted by over 200,000 developers
				</H2>
			</div>
			<CommentCarousel content={bitTestimonials} />
		</div>
	);
}
