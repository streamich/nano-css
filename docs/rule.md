# `rule()` Addon

`rule()` is a wrapper around [`put()`](./put.md) interface; it is a [3<sup>rd</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#3rd-generation)
interface. You can find this interface in many other CSS-in-JS libraries, it simply
returns a list class names given a css-like object:

```js
const {rule} = nano;
const css = {
    color: 'tomato',
    ':hover': {
        color: 'blue',
    },
};
const className = rule(css);
```

The code above will automatically generate predictable class names on the server and browser.
However, by default it uses unstable JSON stringify, which is fine in most cases if your
app runs only in a browser, however, if you render on the server side and want to hydrate
your CSS, you should use [`stable` addon](./stable.md), which makes sure that class names
are the same between different JavaScript environments.

Optionally, using the second argument, you can specify the class name explicitly for performance
and semantic reasons.

```js
const className = rule(css, 'RedText');
```


## Leading Space

`nano-css` always returns class names with a leading space, so you can simply concatenate those
with your other class names.

```jsx
const otherClass = 'foo';
const className = rule(css);

<div className={otherClass + className}>Hello world!</div>
```

This results in:

```html
<div class="foo _xuhuadsf">Hello world!</div>
```


## Installation

Simply add the the `rule` addon, read more about the [Addons](./Addons.md).

```js
import {create} from 'nano-css';
import {addon} from 'nano-css/addon/rule';

const nano = create();
addon(nano);
const {rule} = nano;

export {
    rule
}
```
