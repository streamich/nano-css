# Server-side Rendering

When used in a non-browser environment `nano-css` will not attempt to inject CSS into the DOM, but
will instead accumulate it as a raw CSS string in a `raw` property. Use that to generate your templates
on the server:

```js
html += `<style>${nano.raw}</style>`;
```


## Re-hydrating

`nano-css` can re-hydrate server-side generated CSS. To do that, you need to install [`hydrate` addon](hydrate.md);
and set `nano-css` id on your `<style>` element.

```js
html += `<style id="nano-css">${nano.raw}</style>`;
```
