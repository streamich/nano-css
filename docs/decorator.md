# `decorator` Addon

The `decorator` addon exposes `@css` decorator that you can use to style your stateful
React class components.

```jsx
const {css} = nano;

@css({
    display: 'inline-block',
    borderRadius: '3px',
    padding: '0.5rem 0',
    margin: '0.5rem 1rem',
    width: '11rem',
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
})
class Button extends Component {
    render () {
        return <button>Click me!</button>;
    }
}
```


## Usage

You can use `@css` decorator in a number of ways. You can specify statics styles, as well as,
dynamic styles that depend on `props`.


### Simple Decorator

You can set the decorator as a simple class `@css` decorator and use static `css` property for
static styles.

```js
@css
class Button extends Component {
    static css = {
        color: 'red'
    };

    render () {
        // ...
    }
}
```

You can also specify a dynamic CSS template in the `css` method.

```js
@css
class Button extends Component {
    css () {
        return {
            background: this.props.primary ? 'blue' : 'grey'
        };
    }

    render () {
        // ...
    }
}
```


### Customizable Decorator

You can specify static styles directly in the class decorator.

```js
@css({
    color: 'red'
})
class Button extends Component {
    render () {
        // ...
    }
}
```

Then you can specify dynamic CSS template as a `render()` method decorator.

```js
class Button extends Component {
    @css((props) => ({
        background: props.primary ? 'blue' : 'grey'
    }))
    render () {
        // ...
    }
}
```


## Installation

Simply install `decorator` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)

Read more about the [Addon Installation](./Addons.md#addon-installation).
