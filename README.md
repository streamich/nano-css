# nano-css

[![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

__Tiny [5<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#5th-generation) CSS-in-JS library__ that you can actually use in production; *with tons of [addons](./docs/Addons.md)*.

- Only __0.5 Kb__ in base configuration
- __Library-agnostic__ &mdash; use it standalone, with React, Preact, Vue.js, or any other library
- __Isomorphic__ &mdash; render on server and browser, generates stable class names, and re-hydrates
- __Performant__ &mdash; does not create wrapper components, does not use inline styles or inline `<style>` elements in the document body, but caches all class names for re-use and injects CSS using `.insertRule()` for performance
- __`@media` queries__ and __animation `@keyframes`__ are supported


## Reference

- [Installation](./docs/Installation.md)
- [Addons](./docs/Addons.md)
  - [`put()`](./docs/put.md)
  - [`rule()`](./docs/rule.md)
  - [`drule()`](./docs/drule.md)
  - [`sheet()`](./docs/sheet.md)
  - [`dsheet()`](./docs/dsheet.md)
  - [`jsx()`](./docs/jsx.md)
  - [`useStyles()`](./docs/useStyles.md)
  - [`withStyles()`](./docs/withStyles.md)
  - [`decorator`](./docs/decorator.md)
  - [`component`](./docs/component.md)
  - [`style()`](./docs/style.md)
  - [`styled()()`](./docs/styled.md)
  - [`hyperstyle()`](./docs/hyperstyle.md)
  - [`stable`](./docs/stable.md)
  - [`atoms`](./docs/atoms.md)
  - [`nesting`](./docs/nesting.md)
  - [`keyframes()`](./docs/keyframes.md)
  - [`hydrate`](./docs/hydrate.md)
  - [`stylis`](./docs/stylis.md)
  - [`unitless`](./docs/unitless.md)
  - [`!important`](./docs/important.md)
  - [`:global`](./docs/global.md)
  - [Animations](./docs/animations.md)
  - [CSS resets](./docs/resets.md)
- [Server-side rendering](./docs/SSR.md)


## Installation

<pre>
npm i <a href="https://www.npmjs.com/package/nano-css">nano-css</a> --save
</pre>

Read more about [*Installation*](./docs/Installation.md).


## License

[Unlicense](./LICENSE) &mdash; public domain.


[npm-url]: https://www.npmjs.com/package/nano-css
[npm-badge]: https://img.shields.io/npm/v/nano-css.svg
[travis-url]: https://travis-ci.org/streamich/nano-css
[travis-badge]: https://travis-ci.org/streamich/nano-css.svg?branch=master
