# `styled()()` Addon

The `styled()()` allows you to create *"styled components"* just like
[`style()`](./style.md), but has a different syntax and comes with a list of
pre-generated HTML tags.

```jsx
const Button = styled('button')({
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    color: 'white',
    border: '2px solid white',
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
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    color: 'white',
    border: '2px solid white',
}, (props) => ({
    background: props.primary ? 'blue' : 'grey',
    fontSize: props.small ? '12px' : '16px'
}));
```


## Installation

Simply install `styled` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)
- [`jsx()`](./jsx.md)
- [`style()`](./style.md)

Read more about the [Addons](./Addons.md).
