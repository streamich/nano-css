# `atoms` Addon

When composing CSS-like objects in `nano-css`, you can use either kebab-case

```js
const className = rule({
    'border-top': '1px solid red'
});
```

or camel-case syntax

```js
const className = rule({
    borderTop: '1px solid red'
});
```

`atoms` addon provides a list of *atoms* that can be used as shorthands for CSS rule declarations properties.

```js
const className = rule({
    bdt: '1px solid red'
});
```

Those are good for DX and they will decrease your overall bundle size after
sufficient use. You can find the full up-to-date atom list [here](../addon/atoms.js). Below
is the atom list at the moment of this writing:

```js
var atoms = {
    d:      'display',

    mar:    'margin',
    mart:   'margin-top',
    marr:   'margin-right',
    marb:   'margin-bottom',
    marl:   'margin-left',
    pad:    'padding',
    padt:   'padding-top',
    padr:   'padding-right',
    padb:   'padding-bottom',
    padl:   'padding-left',

    bd:     'border',
    bdt:    'border-top',
    bdr:    'border-right',
    bdb:    'border-bottom',
    bdl:    'border-left',
    bdrad:  'border-radius',

    col:    'color',
    op:     'opacity',
    bg:     'background',
    bgc:    'background-color',

    fz:     'font-size',
    fs:     'font-style',
    fw:     'font-weight',
    ff:     'font-family',

    lh:     'line-height',
    bxz:    'box-sizing',
    cur:    'cursor',
    ov:     'overflow',
    pos:    'position',
    ls:     'list-style',
    ta:     'text-align',
    td:     'text-decoration',
    fl:     'float',
    w:      'width',
    h:      'height',
    trs:    'transition',
    out:    'outline',
    vis:    'visibility',
    ww:     'word-wrap',
    con:    'content',
};
```


## Installation

Simply install `atoms` addon. Read more about the [Addons](./Addons.md).
