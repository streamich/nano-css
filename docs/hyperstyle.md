# `hyperstyle()` Addon

The `hyperstyle()` creates a new hyperscript function `h` that you use to create your
virtual DOM elements.

```jsx
const h = nano.hyperstyle({
    foo: {
        color: 'red'
    }
});

const App = () =>
    h('div', {styleName: 'foo'}, 'My app...');
```

Then in your elements you use `styleName` prop to pick one of the defined styles.


For TypeScript you can set in `tsconfig.json` to use `h` as hyperscript function.

```json
{
    "compilerOptions": {
        "jsxFactory": "h"
    }
}
```

For Babel you can use `jsx` pragma to set `h` as hyperscript function.

```js
/** @jsx h */
```

This way you can use JSX in your code:

```jsx
/** @jsx h */

const h = nano.hyperstyle({
    foo: {
        color: 'red'
    }
});

const App = () =>
    <div styleName="foo">My app..</div>;
```


## Installation

Simply install `hyperstyle` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)
- [`sheet()`](./sheet.md)

Read more about the [Addons](./Addons.md).
