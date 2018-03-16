# Server-side Rendering

When used in a non-browser environment `nona-css` will not attempt to inject CSS into the DOM, but
will instead accumulate it as a raw CSS string in a `raw` property. Use that to generate your templates
on the server:

```js
html += `<style>${nano.raw}</style>`;
```

