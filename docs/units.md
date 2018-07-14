# `.units` Addon

> Inspired by [`electron-css`](https://github.com/azukaar/electron-css#units).

Functions for adding units to your numbers.

```js
nano.px(36);    // 36px
nano.em(1);     // 1em
nano.pct(25);   // 25%
nano.inch(3);   // 3in
// ...
```

Supports all CSS units and has to special functions `.pct()` and `.inch()` for `%` and `in`, respectively.

All functions are also available as a separate `.units` property.

```js
nano.units.px(36);    // 36px
nano.units.em(1);     // 1em
nano.units.pct(25);   // 25%
nano.units.inch(3);   // 3in
// ...
```

## Installation

Simply install `units` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
