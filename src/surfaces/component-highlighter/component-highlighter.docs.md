> ⚠️ DEPRECATED.  
> this component is no longer maintained, and used for very narrow tasks.

Identify components using a border and tooltip. The floating elements are positioned using [Popper.js](https://popper.js.org/), with some custom code.

To select an element in the page, we listen to 'mouseOver' event for any user interaction with a child element,  
and then look for the first parent that has the html attribute "data-bit-id".  
Components with the 'data-ignore-component-highlight' attribute are completely ignored,  
to avoid changing target when interacting with the highlighter itself.

### Basic usage

```tsx
// set the display version of each component
const versions = {
	'teambit.evangelist/elements/button': '1.0.0',
};

function App() {
	return (
		<ComponentHighlighter active versionMap={versions}>
			<div data-bit-id="teambit.evangelist/elements/button">this element will be highlighted</div>
		</ComponentHighlighter>
	);
}
```
