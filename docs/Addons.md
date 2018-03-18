# Addons

`nano-css` comes only with a single [`put()`](./put.md) addon pre-installed. However, it has
plenty more to chose from. Below is a list of addons shipped with `nano-css`.

- [`put()`](./put.md) &mdash; injects CSS styles given a selector
- [`rule()`](./rule.md) &mdash; injects CSS styles and returns a generated selector
- [`drule()`](./drule.md) &mdash; like `rule()`, but allows to add on-the-fly overrides
- [`sheet()`](./sheet.md) &mdash; collection of `rule()`s, injects CSS styles only when used
- [`dsheet()`](./dsheet.md) &mdash; like `sheet()`, but allows to add on-the-fly overrides
- [`jsx()`](./jsx.md) &mdash; creates styling blocks for virtual DOM libraries
- [`useStyles()`](./useStyles.md) &mdash; adds `styles` as a second argument for your component
- [`withStyles()`](./withStyles.md) &mdash; injects `styles` prop into your component
- [`decorator`](./decorator.md) &mdash; provides `@css` decorator for styling stateful React components
- [`component`](./component.md) &mdash; provides React `Component` class to inherit from
- [`style()`](./style.md) &mdash; allows you to create *styled components*
- [`styled()()`](./styled.md) &mdash; better syntax for *styled components*
- [`hyperstyle()`](./hyperstyle.md) &mdash; creates styled hyperscript `h` function
- [`stable`](./stable.md) &mdash; generates consistent class names
- [`atoms`](./atoms.md) &mdash; CSS shorthands for better DX
- [`nesting`](./nesting.md) &mdash; better nesting features
- [`keyframes()`](./keyframes.md) &mdash; adds `@keyframes` support
- [`hydrate`](./hydrate.md) &mdash; adds support for re-hydration on client side
- [`prefixer`](./prefixer.md) &mdash; auto-prefixes your styles with correct vendor prefixes
- [`stylis`](./stylis.md) &mdash; write CSS as strings
- [`unitless`](./unitless.md) &mdash; automatically adds `px` to styles
- [`!important`](./important.md) &mdash; adds `!important` to all declarations
- [`:global`](./global.md) &mdash; allows emitting global styles
- [`animate/*`](./animations.md) &mdash; collection of animation styles
- [`reset/*`](./resets.md) &mdash; collection of CSS resets
- [`reset-font`](./reset-font.md) &mdash; global styles for better font
- [`googleFont()`](./googleFont.md) &mdash; loads custom fonts from *Google Fonts*

## Addon Installation

All addons are in the `nano-css/addon/` folder and are exported
as an `addon` named export. Addon is simply a function that receives `nano-css` renderer object
as a single argument.

When these docs mention that you need to install an addon, say `xxx`, you simply import it
from the addon folder and apply to the nano renderer object:

```js
import {addon as addonXXX} from 'nano-css/addon/xxx';

addonXXX(nano);

nano.xxx(/* ... */);
```

Here we install [`rule()`](./rule.md) and [`atoms`](./atoms.md) addons:

```js
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonAtoms} from 'nano-css/addon/atoms';

const nano = create();

addonRule(nano);
addonAtoms(nano);
```
