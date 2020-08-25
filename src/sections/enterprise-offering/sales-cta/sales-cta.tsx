import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@teambit/base-ui.surfaces.card';
import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { mutedText } from '@teambit/base-ui.text.muted-text';
import { TextSeparator } from '@teambit/base-ui.text.text-separator';
import { fullWidth, marginCenter } from '@teambit/base-ui.layout.align';

import { Button } from '@teambit/evangelist.elements.button';
import { H4 } from '@teambit/evangelist.elements.heading';

import styles from './sales-cta.module.scss';
import { margin } from '@teambit/evangelist.layout.experimental.spacing';
import { ContactForm } from './contact-form';
import { ContactValues } from './contact-values';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { colorPalette } from '@teambit/base-ui.theme.color-palette';

export type EnterpriseCtaProps = {
	/** handles form submission, with user input as a single object parameter. Return a promise to show loader */
	onSubmitCta?: (values: ContactValues) => any | Promise<any>;
	/** handles 'book a meeting' call to action. Return a promise to show loader */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A call-to-action section, allowing enterprise users to contact us directly from the Enterprise page.<br/>
 * Form is managed by Formik, and validated by Yup.
 * @param SalesCta
 */
export const SalesCta = (props: EnterpriseCtaProps) => {
	const { onSubmitCta, onBookMeeting, className, ...rest } = props;
	return (
		<div
			{...rest}
			className={classNames(styles.particlesBg, className)}
			data-bit-id="bit.evangelist/sections/enterprise-offering/sales-cta"
		>
			<Card id="lets-talk" className={classNames(styles.formCard, marginCenter)}>
				<H4 size={PossibleSizes.xs}>Let’s talk </H4>
				<Paragraph className={classNames(margin[30], mutedText)}>
					Drop a message and we’ll get back to you shortly.
				</Paragraph>

				<ContactForm onSubmitMessage={onSubmitCta} />

				<TextSeparator
					className={classNames(mutedText, styles.margin, styles.separator)}
				>
					OR
				</TextSeparator>

				<Button importance="normal" onClick={onBookMeeting} className={classNames(fullWidth, colorPalette.muted)}>
					Book Intro
				</Button>
			</Card>

			<div className={styles.particlesContainer}>
				<div className={styles.redParticle} />
			</div>
		</div>
	);
};
