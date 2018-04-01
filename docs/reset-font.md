# `reset-font` Addon

Injects the below global styles to make fonts look better.

```js
{
    'html, body': {
        fontFamily: '"Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",sans-serif',
        fontWeight: 400,
        fontSize: '16px',

        '-moz-text-size-adjust': '100%',
        '-ms-text-size-adjust': '100%',
        '-webkit-text-size-adjust': '100%',
        'text-size-adjust': '100%',

        // Makes fonts more smooth/prettier.
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
    }
}
```


## Installation

Simply install `reset-font` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
