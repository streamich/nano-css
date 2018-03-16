# `nesting` Addon

`nano-css` allows to do basic class name nesting out-of-the-box. This addon
extends that functionality in the following ways.

Interpolates nested selectors separated by comma.

```js
nano.put('.foo', {
    '.bar, .baz': {
        color: 'red'
    }
});
```

This results in:

```css
.foo .bar, .foo .baz {
    color: red;
}
```

Introduces `&` meta character, which refers to the parent selector.

```js
nano.put('.foo', {
    color: 'red',
    '&:hover': {
        color: 'blue'
    },
    '.globa_class &': {
        color: 'green'
    }
});
```

This results in:

```css
.foo {
    color: red;
}
.foo:hover {
    color: blue;
}
.global_class .foo {
    color: green;
}
```


## Installation

Simply install `nesting` addon. Read more about the [Addons](./Addons.md).
