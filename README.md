# ezcss

[![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

Super lite CSS-in-JS solution.


## Usage

Import renderer.

```js
import {Renderer} from 'ezcss';

const renderer = new Renderer;
const {rule, sheet, withStyles, useStyles, styled, css} = renderer;
```

Render a single "rule".

```js
const className = rule({
    border: '1px solid red'
}, 'MyName');

<div className={className} />
```

Create a "styles sheet" with multiple lazy-evaluating rules.

```js
const styles = sheet({
    main: {
        border: '1px solid red'
    },
    element: {
        border: '1px solid blue'
    }
}, 'MyName');

<div className={styles.main} />
```

Injects `styles` prop into component.

```js
const styles = {
    main: {
        border: '1px solid red'
    }
};

const MyComp = withStyles(styles, function MyComp ({styles}) {
    return <div className={styles.main} />
});
```

Use `styles` object in your component.

```js
const styles = {
    main: {
        border: '1px solid red'
    }
};

const MyComp = useStyles(styles, function MyComp (props, styles) {
    return <div className={styles.main} />
});
```

Create "styled" components.

```js
const Div = styled('div', {
    border: '1px solid red'
}, 'RedBorderDiv');

<Div>Hello world!</Div>
```

Stateful component style decorator.

```js
@css({
    border: '1px solid red'
})
class MyComponent extends Component {
    render () {

    }
}
```


## Server Side Rendering

`excss` works in Node.js environment as well. Use `.raw` property to access raw CSS styles
on server and include then in your template.

```js
const html += `<style>${renderer.raw}</style>`;
```


## License

[Unlicense](./LICENSE) &mdash; public domain.


[npm-url]: https://www.npmjs.com/package/ezcss
[npm-badge]: https://img.shields.io/npm/v/ezcss.svg
[travis-url]: https://travis-ci.org/streamich/ezcss
[travis-badge]: https://travis-ci.org/streamich/ezcss.svg?branch=master
