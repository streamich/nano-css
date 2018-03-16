# `dsheet()` Addon

`dsheet()` interface is similar to [`sheet()`](./sheet.md) interface, but allows you to add
CSS overrides inside render functions, making it a [5<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#5th-generation)
interface.

```js
const cssMap = {
    input: {
        border: '1px solid grey',
    },
    button: {
        border: '1px solid red',
        color: 'red',
    }
};
const styles = dsheet(cssMap);
```

Usage:

```jsx
<input className={styles.input()}>
<input className={'' + styles.input}>
<input className={String(styles.input)}>
<input className={styles.input.toString()}>
<input className={styles.input({
    color: 'red',
    outline: 'none',
    ':focus': {
        outline: '1px solid blue'
    }
})}>
```

Optionally, you can name your style sheets.

```js
const styles = sheet(cssMap, 'ContactForm');
```


## Installation

Install `dsheet` addon and its dependencies:

- `cache`
- `rule`
- `sheet`

Read more about the [Addons](./Addons.md).
