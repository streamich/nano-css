# Usage

Install `nano-css`

<pre>
npm i <a href="https://www.npmjs.com/package/nano-css">nano-css</a> --save
</pre>

To use the stock version simply create a `renderer`

```jsx
import {create} from 'nano-css';

const renderer = create();
const {put} = renderer;

put('.test', {
    color: 'red',
    border: '1px solid red'
});

<div className='test'>Hello world!</div>
```

However, recommended optimal usage in a large project is with the following addons (read more about [addons](./Addons.md)),
create an empty `css.js` file in your project and paste the below

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
    pfx: 'my-company-',
    h: createElement,
});

addonCache(nano);
addonStable(nano);
addonNesting(nano);
addonAtoms(nano);
addonKeyframes(nano);
addonRule(nano);
addonSheet(nano);
addonJsx(nano);

const {put, rule, sheet, jsx, keyframes} = nano;

export {
    put,
    rule,
    sheet,
    jsx,
    keyframes,
};
```
