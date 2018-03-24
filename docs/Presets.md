# Presets

`nano-css` comes with a range of addons that sometimes may be overwhelming to pick through and
cumbersome to install. To ease this we have created *Presets* &mdash; presets are simply functions
that create a `nano-css` instance and install addons automatically for you.


## Example

```js
import {preset} from 'nano-css/preset/sheet';

const {rule, sheet} = preset();

export {
    rule,
    sheet
};
```


## List

Below is a list of available presets.

- `sheet` &mdash; installs [`sheet()`](./sheet.md) addon, as well as `stable`, `nesting`, `atoms`, and `keyframes` addons
- `vdom` &mdash; similar to `sheet` preset, but also installs [`jsx()`](./jsx.md) addon, you need to provide `h` function in configuration
- `react` &mdash; similar to `vdom` preset, but specifies hyperscript function `h` automatically and also installs `snake`, `style`, `styled`, and `decorator` addons
