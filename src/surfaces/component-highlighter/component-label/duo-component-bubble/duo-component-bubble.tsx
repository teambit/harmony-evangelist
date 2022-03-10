import React from 'react';
import classNames from 'classnames';
import { Card } from '@teambit/base-ui.surfaces.card';

import scopeStyles from './scope-colors.module.scss';

import { DuoComponentBubbleProps, ScopeBubbleProps, ComponentBubbleProps } from './duo-component-types';
import styles from './duo-component-bubble.module.scss';

export function DuoComponentBubble({
	bitId,
	fullScopeName,
	className,
	baseUrl,
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
				baseUrl={baseUrl}
			/>
			<ComponentBubble bitId={bitId} baseUrl={baseUrl} />
		</Card>
	);
}

function ScopeBubble({ bitId, fullScopeName, className, baseUrl = '/', ...rest }: ScopeBubbleProps) {
	const fullName = bitId.getFullScopeName();
	const name = bitId.scope;
	const scopeUrl = `${baseUrl}/${bitId.getFullScopeName('/')}`;

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

function ComponentBubble({ bitId, className, baseUrl, ...rest }: ComponentBubbleProps) {
	const version = bitId.version;
	const fullName = bitId.getFullName();
	const componentQuery = bitId.toQueryParams();
	const url = `${baseUrl}/${bitId.toUrl()}${componentQuery && `?${componentQuery}`}`;
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
