# `withStyles()` Addon

`withStyles()` is a higher order component, which injects `styles` props.

```jsx
const cssMap = {
    main: {
        border: '1px solid red'
    }
};

const MyComp = withStyles(cssMap, ({styles}) => {
    return <div className={styles.main} />
});
```

You can specify the name our your component as a third argument.

```js
withStyles(cssMap, MyComp, 'MyComponent');
```

Or you can name your function, in that case the function name will
be automatically picked up.

```jsx
const MyComp = withStyles(cssMap, function MyComponent ({styles}) {
    return <div className={styles.main} />
});
```


## Installation

Install `withStyles` addon and its dependencies:

- [`rule()`](./rule.md)
- [`sheet()`](./sheet.md)

Read more about the [Addon Installation](./Addons.md#addon-installation).
