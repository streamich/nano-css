# Server-side Rendering

When used in a non-browser environment `nano-css` will not attempt to inject CSS into the DOM, but
will instead accumulate it as a raw CSS string in a `raw` property. Use that to generate your templates
on the server:

```js
html += `<style>${nano.raw}</style>`;
```


## Re-hydrating

`nano-css` can re-hydrate server-side generated CSS. To do that, you need to install [`hydrate` addon](hydrate.md);
and provide style sheet you want to hydrate to the `nano-css` instance when creating it.

```js
const nano = create({
    sh: typeof document === 'object' ? document.getElementById('nano-css') : null
});

html += `<style id="nano-css">${nano.raw}</style>`;
```


## External Style Sheet Extraction

You can also extract styles into an external style sheet. Make sure you need to do it, because it might
be an anti-pattern. To do that use [`extract`](./extract.md) addon.
