# `sourcemaps` Addon

Adds sourcemap support in development mode.

![](./sourcemaps.gif)

Do not use this addon in production. Check environment to exclude it from production:

```js
if (process.env.NODE_ENV !== 'production') {
    addonSourcemaps(nano);
}
```


## Installation

Simply install `sourcemaps` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
