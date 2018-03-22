# `snake` Addon

Allows you to create CSS-like objects using method chaining.

```js
const css = nano.s.col('red').bdrad('5px').bgWhite.mar('10px').pointer;
```

Returns:

```js
{
    color: 'red',
    'border-radius': '5px',
    backgroundColor: '#fff',
    margin: '10px',
    cursor: 'pointer'
}
```

It supports all [`atoms`](./atoms.md) as methods.

```js
nano.s.bg('pink').pad('20px'); // etc..
```

It also supports the following keys.

```js
nano.s
    .bgWhite        // backgroundColor: '#fff'
    .bgBlack        // backgroundColor: '#000'
    .pointer        // cursor: pointer
    .inlineBlock    // inline: block
    .bold           // fontWeight: bold
    .em             // fontStyle: italic
```

You can define your custom chain rules as the second parameter of the addon.

```js
import {addon as addonSnake} from 'nano-css/addon/snake';

addonSnake(nano, {
    // This will create a function: nano.s.border('1px solid red');
    b: 'border',

    // This creates a property: nano.s.display;
    block: function () {
        this.display = block;
    },

    // This creates a method: nano.s.font('Arial')
    border: function (fontFace) {
        this.fontFace = fontFace;
    }
});
```


## Installation

Simply install `snake` addon. If you, will evaluate styles using `.valueOf()` or `.toString()`, you also
need to install `cache` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
