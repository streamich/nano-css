# `stylis` Addon

Adds [`stylis`](https://github.com/thysultan/stylis.js) pre-processor. This allows you
to write CSS as a string using `stylis` syntax everywhere where CSS-like object is expected.

```js
const className = nano.rule(`
    color: red;
    &:hover {
        color: blue
    }
`);
```

---

> __Nota Bene__
>
> If you use `stylis` pre-processor some other addons may not work with it.

---


## Installation

Simply install `stylis` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
