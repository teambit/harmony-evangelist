import React from 'react';
import classNames from 'classnames';
import { Image } from '@teambit/evangelist.elements.image';
import styles from './enterprise-logos.module.scss';

const LOGOS = [
	'homepage-enterprise-logos/Dell.svg',
	'homepage-enterprise-logos/ebay.svg',
	'homepage-enterprise-logos/Tesla.svg',
	'homepage-enterprise-logos/at&t.svg',
	'homepage-enterprise-logos/Moodys.svg',
	'homepage-enterprise-logos/Carlsberg-1.svg',
	'homepage-enterprise-logos/Autodesk.svg',
	'homepage-enterprise-logos/progressive-leasing.svg?v=0.1',
];

export type EnterpriseLogosProps = {} & React.HTMLAttributes<HTMLDivElement>;

export function EnterpriseLogos({ className, ...rest }: EnterpriseLogosProps) {
	return (
		<div className={classNames(styles.holder, className)} {...rest}>
			{LOGOS.map((logo, index) => (
				<Image key={index} className={styles.icon} alt="enterprise" src={logo} />
			))}
		</div>
	);
}
