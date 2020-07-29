import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@teambit/base-ui-temp.theme.sizes';

import { textColumn } from '@teambit/base-ui-temp.layout.page-frame';
import { marginCenter } from '@teambit/base-ui-temp.layout.align';

import { CommentCarousel } from '@teambit/evangelist-temp.marketing.comment-carousel/comment-carousel';
import { bitTestimonials } from '@teambit/evangelist-temp.content.bit-testimonials';
import { H2 } from '@teambit/evangelist-temp.elements.heading';

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
					Trusted by over 100,000 developers
				</H2>
			</div>
			<CommentCarousel content={bitTestimonials} />
		</div>
	);
}
