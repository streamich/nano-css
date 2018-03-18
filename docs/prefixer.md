# `prefixer` Addon

Uses [`inline-style-prefixer`](https://github.com/rofrischmann/inline-style-prefixer) library
to auto-prefix your styles on the server and browser.

Example:

```js
nano.put('.foo', {
    flex: 1
});
```

Result:

```css
.foo {
    -webkit-flex:1;
    flex:1;
}
```


## Installation

Simply install `prefixer` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
