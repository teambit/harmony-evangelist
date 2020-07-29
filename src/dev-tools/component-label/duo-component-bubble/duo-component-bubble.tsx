import React from 'react';
import classNames from 'classnames';
import { Card } from '@teambit/base-ui-temp.surfaces.card';

import scopeStyles from './scope-colors.module.scss';
import { BASE_URL } from '../base-url';

import { DuoComponentBubbleProps, ScopeBubbleProps, ComponentBubbleProps } from './duo-component-types';
import styles from './duo-component-bubble.module.scss';

export function DuoComponentBubble({
	bitId,
	fullScopeName,
	className,
	...rest
}: DuoComponentBubbleProps) {
	const scopeFullName = bitId.getFullScopeName();

	return (
		<Card
			{...rest}
			className={classNames(
				className,
				scopeStyles.scopeColorDefinition,
				styles.duoComponentBubble
			)}
			data-current-scope={scopeFullName}
			data-ignore-component-highlight
		>
			<ScopeBubble
				bitId={bitId}
				fullScopeName={fullScopeName}
				className={styles.scopeBubble}
			/>
			<ComponentBubble bitId={bitId} />
		</Card>
	);
}

function ScopeBubble({ bitId, fullScopeName, className, ...rest }: ScopeBubbleProps) {
	const fullName = bitId.getFullScopeName();
	const name = bitId.scope;
	const scopeUrl = `${BASE_URL}/${bitId.getFullScopeName('/')}`;

	return (
		<a
			href={scopeUrl}
			className={classNames(styles.link, className)}
			rel="noopener noreferrer"
			target="_blank"
			{...rest}
		>
			<div className={classNames(styles.scopeName)}>
				{fullScopeName ? fullName : name}
			</div>
		</a>
	);
}

function ComponentBubble({ bitId, className, ...rest }: ComponentBubbleProps) {
	const version = bitId.version;
	const fullName = bitId.getFullName();
	const componentQuery = bitId.toQueryParams();
	const url = `${BASE_URL}/${bitId.toUrl()}${componentQuery && `?${componentQuery}`}`;
	return (
		<a
			href={url}
			className={classNames(styles.link, styles.componentName, className)}
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className={styles.fullName}>{fullName}</div>
			{version && (
				<div className={styles.version}>
					{/* <span className={styles.separator}>|</span> */}
					<span className={styles.versionPrefix}>@</span>
					{version}
				</div>
			)}
		</a>
	);
}
