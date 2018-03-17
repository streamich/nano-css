# Addons

`nano-css` comes only with a single [`put()`](./put.md) addon pre-installed. However, it has
plenty more to chose from. Below is a list of addons shipped with `nano-css`.

- [`put()`](./put.md)
- [`rule()`](./rule.md)
- [`drule()`](./drule.md)
- [`sheet()`](./sheet.md)
- [`dsheet()`](./dsheet.md)
- [`jsx()`](./jsx.md)
- [`useStyles()`](./useStyles.md)
- [`withStyles()`](./withStyles.md)
- [`decorator`](./decorator.md)
- [`component`](./component.md)
- [`style()`](./style.md)
- [`styled()()`](./styled.md)
- [`hyperstyle()`](./hyperstyle.md)
- [`stable`](./stable.md)
- [`atoms`](./atoms.md)
- [`nesting`](./nesting.md)
- [`keyframes()`](./keyframes.md)
- [`unitless`](./unitless.md)
- [`!important`](./important.md)
- [`:global`](./global.md)


## Addon Installation

All addons are in the `nano-css/addon/` folder and are exported
as an `addon` named export. Addon is simply a function that receives `nano-css` renderer object
as a single argument.

Here we install [`rule()`](./rule.md) and [`atoms`](./atoms.md) addons:

```js
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonAtoms} from 'nano-css/addon/atoms';

const nano = create();

addonRule(nano);
addonAtoms(nano);
```

When these docs mention that you need to install an addon, say `xxx`, you simply import it
from the addon folder and apply to the nano renderer object:

```js
import {addon as addonXXX} from 'nano-css/addon/xxx';

addonXXX(nano);

nano.xxx(/* ... */);
```
