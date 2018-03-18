# `component` Addon

`component` addon creates a new `Component`class, which you inherit from to create
stateful styled React components.

```jsx
const {Component} = nano;

class Button extends Component {
    static css = {
        display: 'inline-block',
        borderRadius: '3px',
        padding: '0.5rem 0',
        margin: '0.5rem 1rem',
        width: '11rem',
        background: 'transparent',
        color: 'white',
        border: '2px solid white',
    };

    render () {
        return <button>Click me!</button>;
    }
}
```

You can also have 4<sup>th</sup> generation dynamic styles that change with
props.

```js
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


## Installation

Simply install `component` addon and its dependencies:

- `cache`
- [`rule()`](./rule.md)

Read more about the [Addon Installation](./Addons.md#addon-installation).
