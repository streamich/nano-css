# `virtual` Addon

Uses [*Virtual CSS*](https://ryantsao.com/blog/virtual-css-with-styletron) when injecting rules &mdash; splits all CSS
rules into atomic single declarations, where each is assigned a class name and reused.

Example:

```js
const classNames1 = nano.rule({
    color: 'red',
    border: '1px solid red',
    textAlign: 'center'
});
// _a _b _c

const classNames2 = nano.rule({
    border: '1px solid red',
});
// _b

<div className={classNames1} /> // <div class="_a _b _c" />
<div className={classNames2} /> // <div class="_b" />
```

## Installation

Simply install `virtual` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
