# `keyframes()` Addon

This addon allows one to define CSS `@keyframes` in any CSS-like object.

```js
const className = nano.rule({
    animation: 'my-animation 2s',
    '@keyframes my-animation': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(359deg)'
        }
    }
});
```

It also exposes a `keyframes()` function, which generates a unique animation name automatically.

```js
const animation = nano.keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(359deg)'
    }
});

const className = rule({
    animation: `${animation} 5s`
});
```


## Configuration

As a second argument, `keyframes` addon can accept a configuration object with the following keys:

- `prefixes` &mdash; optional, array of prefixes to add to `@keyframes` at-rule, defaults to `['-webkit-', '-moz-', '-o-', '']`.


## Installation

Simply install `keyframes` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
