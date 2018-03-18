# `styled()()` Addon

The `styled()()` allows you to create *"styled components"* just like
[`style()`](./style.md), but has a different syntax and comes with a list of
pre-generated HTML tags.

```jsx
const Button = styled('button')({
    display: 'inline-block',
    borderRadius: '3px',
}, (props) => ({
    background: props.primary ? 'blue' : 'grey',
    fontSize: props.small ? '12px' : '16px'
}));
```

`styled()()` comes with a list of [pre-generated HTML tag names](../addon/styled.js).

```jsx
const Button = styled.button({
    display: 'inline-block',
    borderRadius: '3px',
}, (props) => ({
    background: props.primary ? 'blue' : 'grey',
    fontSize: props.small ? '12px' : '16px'
}));
```

Optionally, you can specify semantic component name.

```js
const Button = styled.button(css, dynamicCss, 'MyButton');
```

or

```js
const Button = styled('button')(css, dynamicCss, 'MyButton');
```


## Installation

Simply install `styled` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)
- [`jsx()`](./jsx.md)
- [`style()`](./style.md)

Read more about the [Addon Installation](./Addons.md#addon-installation).
