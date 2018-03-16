# `jsx()` Addon

`jsx()` is a [5<sup>th</sup> generation](https://github.com/streamich/freestyler/blob/master/docs/en/generations.md#5th-generation)
interface for creating styling blocks &mdash; components similar to *"styled components"*,
but which are more powerful.

```jsx
const Button = jsx('button', {
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
});

<Button>Click me!</Button>
```

> To use this interface you need to provide the hyperscript function `h` of your virtual
> DOM library when creating a `nano-css` instance. In case of React,
> this is the `createElement` function:
>
> ```js
> import {create} from 'nano-css';
> import {createElement} from 'react';
>
> const nano = create({
>     h: createElement
> });
> ```

Optionally, you can name your styling block:

```js
const Button = jsx('button', css, 'MyButton');
```

Styling blocks pass all their props to the underlying element:

```jsx
<Button
    disabled
    aria-label="something"
    onClick={() => {}}
>
    Click me!
</Button>
```

However, some props have special meaning and are not passed through:

- `css` &mdash; a CSS-like object of dynamic style overrides
- `$as` &mdash; allows to overwrite the underlying element type
- `$ref` &mdash; allows to pass a `ref` to the underlying element

Add custom styling:

```jsx
<Button css={{background: primary ? 'blue' : 'grey'}}>Click me!</Button>
```

Overwrite underlying element type:

```jsx
<Button $as='a'>Click me!</Button>
// <a>Click me!</a>
```


## Component as a Type

You can pass components as an element type.

```js
const Button = jsx(MyComp, css);
```

, where

```jsx
const MyComp = (props) => {
    return <button {...props} />
};
```


## Composition

The above feature of passing component as a type allows you to do composition.

```js
const BaseButton = jsx('button', {
    color: 'red',
    border: '1px solid red',
});

const SmallButton = jsx(BaseButton, {
    fontSize: '11px',
});
```

However, composition of styling blocks is not something that is encouraged, instead you might
consider using dynamic styling `css` prop:

```jsx
const BaseButton = jsx('button', {
    color: 'red',
    border: '1px solid red',
});

const Button = (props) => {
    const {small, ...rest} = props;
    const css = {};

    if (small) {
        css.fontSize = '11px';
    }

    return <BaseButton {...rest} css={css} />;
};
```


## Changing Element Type

Let's say you created a `<button>` component like so.

```js
const Button = jsx('button', {
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
});
```

But you wanted to have the same looking button, which used `<a>` tag instead.
Just wrap it in another component and overwrite the `$as` prop.

```js
const Link = (props) => Button({
    ...props,
    $as: 'a'
});
```


## Installation

Simply install `jsx` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)

Read more about the [Addons](./Addons.md).
