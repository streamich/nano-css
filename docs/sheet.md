# `sheet()` Addon

`sheet()` interface is similar to [`rule()`](./rule.md) interface, but allows you
to specify multiple rules at once.

```jsx
const cssMap = {
    input: {
        border: '1px solid grey',
    },
    button: {
        border: '1px solid red',
        color: 'red',
    }
};
const styles = sheet(cssMap);

<input className={styles.input}>
<button className={styles.button}>Click me!</button>
```

---

> __Nota Bene__
>
> Unlike styles created using `rule()` interface, the styles created with `sheet()` interface are
> not injected into the DOM when they are created. The injection is postponed until the style is accessed for the first time.
>
> ```js
> // CSS in not injected yet.
> const inputClassName = styles.input; // Now it is injected.
> ```
>
> This allows to insert styles *just-in-time* and only if they are actually used.

---

For semantic and performance reasons you can optionally specify a name for your sheet.

```js
const styles = sheet(cssMap, 'ContactForm');
```

This way your class names will look semantic:

```js
console.log(styles.input); // pfx-ContactForm-input
```

## Installation

Simply install `rule` and `sheet` addons.

Read more about the [Addons Installation](./Addons.md#addon-installation).
