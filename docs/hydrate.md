# `hydrate` Addon

Re-hydrates CSS styles generated on the server. On the server add `nano-css` id to your stylesheet.

```js
html += `<style id="nano-css">${nano.raw}</style>`;
```

And when creating `nano-css` instance provide that style sheet in configuration.

```js
const nano = create({
    sh: typeof document === 'object' ? document.getElementById('nano-css') : null
});
```

That's it!


## Installation

Simply install `hydrate` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
