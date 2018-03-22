# `array` Addon

This addon allows to specify multiple values for the same declaration property.

```js
nano.put('.foo', {
    display: ['flex', '-webkit-flex']
});
```

Result:

```css
.foo {
  display: flex;
  display: -webkit-flex;
}
```

It also allows to specify multiple CSS-like objects as an array, which will be merged.

```js
nano.put('.bar', [
    {
        color: 'red'
    },
    {
        border: '1px solid red'
    }
]);
```

Result:

```css
.bar {
  color: red;
  border: 1px solid red;
}
```


## Installation

Simply install `array` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
