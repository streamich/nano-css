# `atoms` Addon

When composing CSS-like objects in `nano-css`, you can use either kebab-case

```js
const className = rule({
    'border-top': '1px solid red'
});
```

or camel-case syntax

```js
const className = rule({
    borderTop: '1px solid red'
});
```

`atoms` addon provides a list of *atoms* that can be used as CSS rule declarations properties

```js
const className = rule({
    bdt: '1px solid red'
});
```

Those are handy as a shortcut and they will decrease your overall bundle size after
sufficient use. You can find the full atom list [here](../addon/atoms.js).


## Installation

Simply install `atoms` addon. Read more about the [Addons](./Addons.md).
