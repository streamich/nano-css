# `style()` Addon

The `style()` interface allows you to create *"styled components"*.

> See [`styled()()`](./styled.md) addon for more functionality.

```jsx
const Button = style('button', {
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

<Button>Click me!</Button>
```

`style()` has the following signature:

```ts
style(type, css, dynamicCss?, name?);
```

, where

- `type` &mdash; string or component to style
- `css` &mdash; CSS-like object to use for styling
- `dynamicCss` &mdash; optional, dynamic style template that receives props and returns a CSS-like object
- `name` &mdash; optional, string, semantic name of the component

---

> __Nota Bene__
>
> Before using `style()` interface you might first consider using [`jsx()`](./jsx.md)
> interface instead. Using `jsx()` interface you can achieve everything you can with the styled components
> but without the complexities that styled components bring. Also, `jsx()` is a
> [5<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#5th-generation)
> interface, whereas `style()` is only [4<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#4th-generation).
>
> The main problem with styled components is that they receive 3 different types of props:
>
> - component props
> - pass-through props
> - CSS overrides
>
> And the user has to make sure that only the pass-through props "*pass through*"
> onto the actual DOM element.

---

Styled components *pass through* all props to the underlying element type.

```jsx
<Button title="Click it!" onClick={() => {}}>Click me!</Button>
```


## Filtering Pass-through Props

You might want to use semantic *component props* with your styled components, like
`primary` or `small`.

```jsx
<Button primary small>Click me!</Button>
```

But styled components pass through all the props to the underlying element type. To avoid
adding `primary` and `small` attributes to actual DOM nodes you can white-list or black-list
pass-through props.


### White-listing Pass-through Props

Below we *white-list* only `title` and `onClick` pass-through props.

```jsx
const ButtonWhitelist = ({className, children, title, onClick}) =>
    <button
        className={className}
        title={title}
        onClick={onClick}
    >{children}</button>;

const Button = style(ButtonWhitelist, {
    // ...
});

<Button primary small title="Click it!" onClick={}>Click me!</Button>
```


### Black-listing Non-pass-through Props

Below we *black-list* `primary` and `small` semantic component props.

```jsx
const ButtonBlacklist = ({primary, small, ...rest}) =>
    <button {...rest} />;

const Button = style(ButtonBlacklist, {
    // ...
});

<Button primary small title="Click it!" onClick={}>Click me!</Button>
```


## Installation

Simply install `style` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)
- [`jsx()`](./jsx.md)

Read more about the [Addon Installation](./Addons.md#addon-installation).
