# `drule()` Addon

`drule()` interface is similar to [`rule()`](./rule.md) interface, but also allows you
to create CSS dynamically inside your render function, making it a [5<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#5th-generation)
interface.

```jsx
const {drule} = nano;
const css = {
    border: '1px solid #888',
    color: '#888',
};
const className = drule(css);
```

Static use case is similar to [`rule()`](./rule.md) interface:

```jsx
<button className={className()}>Click me!</button>
```

or

```jsx
<button className={'' + className}>Click me!</button>
<button className={String(className)}>Click me!</button>
```

but `drule()` also allows you to add custom styling overrides on the fly:

```jsx
<button className={className({color: 'red'})}>Click me!</button>
```

Just like with `rule()` interface you can specify the class name explicitly:

```js
const className = drule(css, 'MyButton');
```


## Example

Below is an example of a React button component that changes its color based on `primary` props.

```jsx
const className = drule({
    border: '1px solid #888',
    color: '#fff',
});

const Button = ({children, primary}) =>
    <button className={className({
        background: primary ? 'blue' : 'grey'
    })}>
        {children}
    </button>;
```


## Installation

To use, install `drule` addon, which depends on `rule` and `cache` addons, read more about the [Addons](./Addons.md).

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
