# `vcssom` Addon

Adds `VRule` and `VSheet` classes, which can be used for rendering and diffing
virtual CSS. Both classes have `.diff()` methods. The `.diff()` method will compute
differences with the previous render and add or remove only necessary CSS rules/declarations.


## Usage

Create a virtual CSS rule.

```js
const rule = new nano.VRule('.my-class');
```

Apply styles to it.

```js
rule.diff({
    color: 'red',
    'font-weight': 'bold',
});

rule.diff({
    color: 'blue',
});
```

Remove the rule from CSSOM (you cannot call `.diff` after this anymore).

```js
rule.del();
```

Create virtual CSS style sheet.

```js
const sheet = new nano.VSheet();
```

Render CSS.

```js
sheet.diff({
    '': {
        '.my-class': {
            color: 'red',
        },
        '.my-class:hover': {
            color: 'blue',
        },
    },
    '@media only screen and (max-width: 600px)': {
        '.my-class': {
            fontWeight: 'bold',
        },
    },
});
```

Remove all rendered CSS.

```js
sheet.diff({});
```


## Installation

Simply install `vcssom` addon and its dependencies:

- [`cssom`](./cssom.md)

Read more about the [Addon Installation](./Addons.md#addon-installation).
