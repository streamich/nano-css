# `hydrate` Addon

Re-hydrates CSS styles generated on the server.

First, install the `hydrate` addon, then add `nano-css` id to your style sheet.

```js
html += `<style id="nano-css">${nano.raw}</style>`;
```

And when creating `nano-css` instance provide that style sheet in configuration.

```js
const isClient = typeof document === 'object';

const nano = create({
    sh: isClient ? document.getElementById('nano-css') : null
});
```

That's it! `nano-css` will not inject CSS rules are already present in the style sheet.


## Installation

Simply install `hydrate` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
