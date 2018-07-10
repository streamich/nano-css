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

You can also manually hydrate any stylesheet or external stylesheet you might have created using [`extract`](./extract.md) addon.

Let's say you have and external style sheet:

```html
<link rel="stylesheet" type="text/css" href="extracted.css" id="extracted-css">
```

You can hydrate it like so:

```js
nano.hydrate(document.getElementById('extracted-css'));
```

*P.S. Currently, does not hydrate media queries or animation keyframes.*

## Installation

Simply install `hydrate` addon.

Read more about the [Addon Installation](./Addons.md#addon-installation).
