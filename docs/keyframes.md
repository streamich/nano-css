# `keyframes()` Addon

This addon allows one to define CSS `@keyframes` in any CSS-like object. It also exposes
a `keyframes()` function, which can generate a unique animation name.

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


## Installation

Simply install `keyframes` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
