import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
// import { HybridHomepage } from './hybrid-homepage';

// if (typeof window !== 'undefined') {
// 	window.matchMedia = function () {
// 		return {
// 			matches: false,
// 			addListener: function () {},
// 			removeListener: function () {},
// 			media: '',
// 			onchange: function () {},
// 			addEventListener: function () {},
// 			removeEventListener: function () {},
// 			dispatchEvent: function () {
// 				return false;
// 			},
// 		};
// 	};
// }

export const HybridHomePageComposition = () => (
	<Theme>{/* <HybridHomepage githubStars={12600} /> */}</Theme>
);

HybridHomePageComposition.canvas = {
	width: 1200,
	height: 400,
	overflow: 'scroll',
};
