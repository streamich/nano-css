# `unitless` Addon

When a style declarations accepts a single numeric value with a unit, in `nano-css`
you have to specify that in a string.

```js
nano.rule('.foo', {
    width: '50px'
});
```

This addon allows you tu use numbers instead, it will postfix every numeric property that
requires a unit with `px`. Properties that don't need a unit will be kep unitless.

```js
nano.rule('.foo', {
    width: 50,
    zIndex: 10
});
```

Result:

```css
.foo {
    width: 50px;
    z-index: 10;
}
```

## Installation

Simply install `unitless` addon. Read more about the [Addons](./Addons.md).
