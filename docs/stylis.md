# `stylis` Addon

Addes [`stylis`](https://github.com/thysultan/stylis.js) pre-processor. This allows you
to write CSS as a string using `stylis` syntax everywhere where CSS-like object is expected.

```js
const className = nano.rule(`
    color: red;
    &:hover {
        color: blue
    }
`);
```


## Installation

Simply install `stylis` addon. Read more about the [Addons Installation](./Addons.md#addon-installation).
