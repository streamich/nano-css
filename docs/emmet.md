# `emmet` Addon

This addon is a super-set for [`atoms`](./atoms.md) addon, but uses [Emmet](https://emmet.io/)
specific abbreviations.

> :warning: Since this is a shorthand library, similar to `atoms`, do not use both these
> libraries at the same time, as few of the abbreviations might conflict.

### Usage

```js
const className = rule({
    c: '#fafafa',
    bgc: '#424242',
    bd: '1px solid #424242',
});
```

Those are good for **DX** and they will decrease your overall bundle size after
sufficient use. You can find the full up-to-date emmet list [here](../addon/emmet.js) or refer
[Emmet Cheatsheet](https://docs.emmet.io/cheat-sheet/) (CSS Section) for all possible abbreviations.

> Currently `@media` queries, `@keyframes` and related abbreviations are not supported. If a specific Emmet
> shorthand is **required** and is not present in this addon, please raise an issue requesting for
> the support.

## Installation

Simply install `emmet` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
