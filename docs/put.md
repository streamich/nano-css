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
