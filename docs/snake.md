# `snake` Addon

Allows you to create CSS-like objects using method chaining.

```js
const css = nano.s.col('red').bdrad('5px').bgWhite.mar('10px').pointer.obj;
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
    .rel                // position: relative
    .abs                // position: absolute
    .bgWhite            // backgroundColor: '#fff'
    .bgBlack            // backgroundColor: '#000'
    .pointer            // cursor: pointer
    .inlineBlock        // inline: block
    .bold               // fontWeight: bold
    .b                  // fontWeight: bold
    .italic             // fontStyle: italic
    .i                  // fontStyle: italic
    .underline          // textDecoration: underline
    .u                  // textDecoration: underline
    .s('key', 'value')  // key: value
```

The `.s(key, value)` method allows you to do nesting.

```js
nano.s.s(':hover'. nano.s.bgWhite)
// {
//    ':hover': {
//        backgroundColor: '#fff'
//    }
// }
```

`.s` can also accept an object.

```js
nano.s.u.s({color: 'red'})
// {
//     textDecoration: 'underline',
//     color: 'red'
// }
```

There are also built in `.hover()` and `.focus()` pseudo-selectors.

```js
nano.s.hover(nano.s.col('red'));
```

Result:

```js
{
    ':hover': {
        color: 'red'
    }
}
```

You can define your custom chain rules as the second parameter of the addon.

```js
import {addon as addonSnake} from 'nano-css/addon/snake';

addonSnake(nano, {
    // This will create a function: nano.s.b('1px solid red');
    b: 'border',

    // This creates a property: nano.s.block;
    block: function () {
        this.display = block;
    },

    // This creates a method: nano.s.font('Arial')
    font: function (fontFace) {
        this.fontFace = fontFace;
    }
});
```


## Special Properties

Use `.obj` property to get the current CSS-like object you generated.

```js
nano.s.col('red').bd('1px solid red').obj;
```

You can also *"evaluate"* the object using `.valueOf()` or `.toString()`, it will inject CSS into the DOM and return a string of class names.

```js
<div className={nano.s.col('red').valueOf()}>foobar</div>
<div className={nano.s.col('red').toString()}>foobar</div>
<div className={nano.s.col('red') + ''}>foobar</div>
<div className={String(nano.s.col('red'))}>foobar</div>
```

Create the styles object, but evaluate the styles "lazily" only when they are used.

```js
const styles = nano.s
    .pointer
    .col('blue')
    .bd('1px solid red');

<div className={'' + styles}>foobar</div>
```


## Installation

Simply install `snake` addon. If you, will evaluate styles using `.valueOf()` or `.toString()`, you also
need to install `cache` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
