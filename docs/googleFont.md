# `googleFont()` Addon

Creates `googleFont()` method that loads fonts from *Google Fonts*. Signature:

```ts
googleFont(name: string, widths?: number | number[], subsets?: string | string[])
```


## Example

Below example loads `Roboto Slab` font at `400` and `700` widths, including `cyrillic` characters.

```js
nano.googleFont('Roboto Slab', [400, 700], 'cyrillic');
```

Now you can use this font.

```js
const className = nano.rule({
    fontFamily: '"Roboto Slab", sans'
});
```


## Installation

Simply install `googleFont` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
