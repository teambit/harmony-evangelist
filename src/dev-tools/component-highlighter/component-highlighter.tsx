import React, { Component, HTMLAttributes } from 'react';
import classNames from 'classnames';

import debounce from 'lodash.debounce';

import styles from './component-highlighter.module.scss';
import { RefTooltip } from '@teambit/base-ui.placement.ref-tooltip';
// @ts-ignore deprecated
import { OverlayBorder } from '@teambit/evangelist.dev-tools.overlay-border';
import { VersionMap } from './content-type';

// @ts-ignore deprecated
import { ComponentLabel } from '@teambit/evangelist.dev-tools.component-label';

export type ComponentHighlighterProps = {
	/** enable highlighting */
	active?: boolean;
	/** show full scope name, including owner */
	fullScopeName?: boolean;
	/** override versions for specific components. As versions change rapidly consumers may want to specify them locally. */
	versionMap?: VersionMap;
	/** list ids to ignore */
	blacklist?: Set<string>;
	/** Actively recalculate position, to support moving elements  */
	motionTracking?: boolean;
} & HTMLAttributes<HTMLDivElement>;

type ComponentHighlighterState = {
	highlightTargetId?: string;
	targetElement?: HTMLElement;
};

/**
 * Identify components using a border and tooltip.
 * The floating elements are positioned using [Popper.js](https://popper.js.org/), with some custom code.
 *
 * To select an element in the page, we listen to 'mouseOver' event for any user interaction with a child element,
 * and then look for the first parent that has the html attribute "data-bit-id".
 * Components with the 'data-ignore-component-highlight' attribute are completely ignored,
 * to avoid changing target when interacting with the highlighter itself.
 * @name ComponentHighlighter
 */

export class ComponentHighlighter extends Component<
	ComponentHighlighterProps,
	ComponentHighlighterState
> {
	state: ComponentHighlighterState = {
		highlightTargetId: undefined,
		targetElement: undefined,
	};

	static defaultProps = {
		fullScopeName: true,
	};

	componentWillReceiveProps(nextProps: ComponentHighlighterProps) {
		const prevProps = this.props;

		if (prevProps.active !== nextProps.active && nextProps.active !== true) {
			this.setState({ highlightTargetId: undefined, targetElement: undefined });
		}
	}

	componentWillUnmount() {
		this.highlight.cancel();
	}

	private _highlight = (targetElement: HTMLElement | null) => {
		const { blacklist = new Set<string>() } = this.props;

		for (let elem = targetElement; !!elem; elem = elem.parentElement) {
			if (elem.hasAttribute('data-ignore-component-highlight')) {
				return; //ignore
			}

			const value = elem.getAttribute('data-bit-id');

			if (value && blacklist.has(value)) {
				continue; //skip
			}

			if (value) {
				this.setState({ targetElement: elem, highlightTargetId: value });
				return; //success!
			}
		}

		this.setState({ targetElement: undefined, highlightTargetId: undefined });
		return; //default - highlight none
	};

	private highlight = debounce(this._highlight, 50);

	private handleEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { target } = event;
		const element = target as HTMLElement;

		if (!element) return;

		this.highlight(element);
	};

	private handleLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.highlight(null);
	};

	render() {
		const {
			active,
			children,
			fullScopeName,
			versionMap = {},
			blacklist,
			motionTracking,
			...rest
		} = this.props;
		const { highlightTargetId, targetElement } = this.state;

		const explicitVersion = highlightTargetId && versionMap[highlightTargetId];

		return (
			<div
				{...rest}
				// DO NOT ADD! use data-ignore in specific children
				// data-ignore-component-highlight
				className={classNames(
					styles.componentHighlighter,
					active && styles.active,
					highlightTargetId && styles.highlighting
				)}
				// "Both `onmouseenter` and `onmouseover` fire when the mouse enters the boundary of an element.
				// However, `onmouseenter` doesn't fire again (does not bubble),
				// if the mouse enters a child element within this first element."
				// https://stackoverflow.com/a/1638929/9941961

				// (this is perfect for this use case)
				onMouseOver={this.handleEnter}
				// triggers when mouse exits this element (and not its children)
				onMouseLeave={this.handleLeave}
			>
				{children}

				<RefTooltip
					className={styles.tooltip}
					targetElement={targetElement}
					motionTracking={motionTracking}
				>
					<ComponentLabel
						bitId={highlightTargetId}
						versionOverride={explicitVersion}
						fullScopeName={fullScopeName}
						data-ignore-component-highlight
					/>
				</RefTooltip>

				<OverlayBorder
					targetElement={targetElement}
					className={styles.border}
					motionTracking={motionTracking}
					data-ignore-component-highlight
				/>
			</div>
		);
	}
}
