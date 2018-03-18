# `drule()` Addon

`drule()` (or *Dynamic Rule*) interface is similar to [`rule()`](./rule.md) interface, but also allows you
to create CSS dynamically inside your render function, making it a [5<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#5th-generation)
interface.

```jsx
const css = {
    border: '1px solid #888',
    color: '#888',
};
const classNames = nano.drule(css);
```

Static use case is similar to [`rule()`](./rule.md) interface:

```jsx
<button className={classNames()}>Click me!</button>
<button className={classNames.toString()}>Click me!</button>
<button className={'' + classNames}>Click me!</button>
<button className={String(classNames)}>Click me!</button>
```

But `drule()` also allows you to add custom styling overrides on the fly.

```jsx
<button className={classNames({color: 'red'})}>Click me!</button>
```

Just like with `rule()` interface you can specify a semantic name.

```js
const classNames = drule(css, 'MyButton');
```


## Example

Below is an example of a React button component that changes its color based on `primary` prop.

```jsx
const classNames = drule({
    border: '1px solid #888',
    color: '#fff',
});

const Button = ({children, primary}) =>
    <button className={classNames({
        background: primary ? 'blue' : 'grey'
    })}>
        {children}
    </button>;
```


## Installation

To use, install `drule` addon, which depends on `rule` and `cache` addons.

```js
import {create} from 'nano-css';
import {addon as addonCache} from 'nano-css/addon/cache';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonDrule} from 'nano-css/addon/drule';

const nano = create();
addonCache(nano);
addonRule(nano);
addonDrule(nano);
const {rule, drule} = nano;

export {
    rule,
    drule
}
```

Read more about the [Addon Installation](./Addons.md#addon-installation).
