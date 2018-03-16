# `useStyles()` Addon

`useStyles()` interface provides a style map as a second argument to your component,
next to props.

```jsx
const cssMap = {
    main: {
        border: '1px solid red'
    }
};

const MyComp = useStyles(cssMap, (props, styles) => {
    return <div className={styles.main} />
});
```

You can specify the name our your component as a third argument.

```js
useStyles(cssMap, MyComp, 'MyComponent');
```

Or you can name your function, in that case the function name will
be automatically picked up.

```jsx
const MyComp = useStyles(cssMap, function MyComponent (props, styles) {
    return <div className={styles.main} />
});
```


## Installation

Install `useStyles` addon and its dependencies:

- [`rule()`](./rule.md)
- [`sheet()`](./sheet.md)

Read more about the [Addons](./Addons.md).
