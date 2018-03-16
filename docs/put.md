# `put()`

`put()` is the only addon that comes pre-installed with `nano-css`.

It simply injects CSS given a selector and a CSS-like object.

```js
nano.put('.foo', {
    color: 'red',
    ':hover': {
        color: 'blue'
    }
});
```

Now you can use the `foo` class name.

```html
<div class="foo">Hover me!</div>
```


## CSS-like object

The second argument of the `put()` function is a *CSS-like object*.

```js
{
    color: 'red',
    ':hover': {
        color: 'blue'
    }
}
```

It maps 1-to-1 to analogous CSS.

```css
.selector {
    color: red
}

.selector:hover {
    color: blue;
}
```


## Nesting

`put()` supports basic arbitrarily deep nesting out-of-the-box.

```js
{
    div: {
        span: {
            ':hover': {
                color: 'blue'
            }
        }
    }
}
```

The above will result in:

```css
.selector div span:hover {
    color: blue;
}
```

For, more advanced nesting feature install [`nesting` addon](./nesting.md).


## Kebab-case and Camel-case Properties

Out-of-the-box `nano-css` supports kebab-case

```js
{
    'text-decoration': 'none'
}
```

and camel-case property syntax.

```js
{
    textDecoration: 'none'
}
```

It also supports *Atoms* via the [`atoms` addon](./atoms.md).
