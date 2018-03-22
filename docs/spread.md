# `spread()` Addon

Works the same as [`rule()`](./rule.md) interface, but instead of returning a string of
class names, it returns an object of data attributes that can be "spread".

```js
const rule = nano.spread({
    color: 'red'
});

<div {...rule}>Hello world!</div>
```

Or, it can be stringified to get a class name.

```js
const rule = nano.spread({
    color: 'red'
});

<div className={rule}>Hello world!</div>
```


## Installation

Simply install `spread` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
