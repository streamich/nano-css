# Addons

`nano-css` comes only with a single [`put()`](./put.md) addon pre-installed. However, it has
a bunch of addons you can choose to add.

All addons are in the `nano-css/addon/` folder and are exported as a function under the
`addon` name. To install an addon simply give it the `nano-css` renderer object as a
single argument.

Here we install `rule()` and `atoms` addons:

```js
import {create} from 'nano-css';
import {addon as addonRule} from 'nano-css/addon/rule';
import {addon as addonAtoms} from 'nano-css/addon/atoms';

const nano = create();

addonRule(nano);
addonAtoms(nano);

const {put, rule} = nano;

export {
    put,
    rule
};
```

When these docs mention that you need to install an addon, say `xxx`, you simply import it
from the addon folder and apply to the nano renderer object:

```js
import {addon as addonXXX} from 'nano-css/addon/xxx';

addonXXX(nano);
```

Below is a list of addons shipped with `nano-css`.

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
- [`styled()`](./styled.md)
- [`hyperstyle()`](./hyperstyle.md)
- [`stable`](./stable.md)
- [`atoms`](./atoms.md)
- [`nesting`](./nesting.md)
- [`keyframes()`](./keyframes.md)
- [`unitless`](./nesting.md)
- [`!important`](./important.md)
- [`global`](./global.md)
