# Installation

Install `nano-css`.

<pre>
npm i <a href="https://www.npmjs.com/package/nano-css">nano-css</a> --save
</pre>

To use a stock version simply create a `nano` renderer object.

```jsx
import {create} from 'nano-css';

const nano = create();

nano.put('.test', {
    color: 'red',
    border: '1px solid red'
});

<div className='test'>Hello world!</div>
```


## Configuration

The `create()` function accepts an options object with the following keys:

- `pfx` &mdash; optional, string, prefix to add to all generated class and animation names, defaults to `_`.
- `h` &mdash; optional, hyperscript function of your virtual DOM library. Only necessary if you are using addons that require it.
- `sh` &mdash; optional, DOM style sheet element, useful when re-hydrating server rendered styles.
- `verbose` &mdash; optional, boolean, whether to be chatty in console in DEV mode.


```js
import {createElement} from 'react';

const nano = create({
    pfx: 'my-company-',
    h: createElement
});
```


## Recommended Setup

Recommended optimal usage in a large project is with the following addons (read more about [addons](./Addons.md)).
Create an empty `nano.js` file in your project and paste the below:

```js
import {createElement} from 'react';
import {create} from 'nano-css';
import {addon as addonCache} from 'nano-css/addon/cache'
import {addon as addonStable} from 'nano-css/addon/stable'
import {addon as addonNesting} from 'nano-css/addon/nesting'
import {addon as addonAtoms} from 'nano-css/addon/atoms'
import {addon as addonKeyframes} from 'nano-css/addon/keyframes'
import {addon as addonRule} from 'nano-css/addon/rule'
import {addon as addonSheet} from 'nano-css/addon/sheet'
import {addon as addonJsx} from 'nano-css/addon/jsx'

const nano = create({
    // Add prefix to all generated class names.
    pfx: 'my-company-',

    // Set hyperscript function of your virtual DOM library, for jsx() addon.
    h: createElement,
});

// Add addons you would like to use.
addonCache(nano);
addonStable(nano);
addonNesting(nano);
addonAtoms(nano);
addonKeyframes(nano);
addonRule(nano);
addonSheet(nano);
addonJsx(nano);

const {rule, sheet, jsx, keyframes} = nano;

// Export everything.
export {
    nano,
    rule,
    sheet,
    jsx,
    keyframes,
};
```

Learn about [presets](./Presets.md) to do this setup for you.
