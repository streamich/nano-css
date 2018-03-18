# Animations

`nano-css` has a number of CSS animation addons. Simply install any of the
below animation addons and you will have available class and animation with that same
name.

- `animate/fadeIn`
- `animate/fadeInDown`
- `animate/fadeInScale`
- `animate/fadeOut`
- `animate/fadeOutScale`

Read more about the [Addons Installation](./Addons.md#addon-installation).


## Example

```js
import {addon as addonAnimateFadeIn} from 'nano-css/addon/animate/fadeIn';

addonAnimateFadeIn(nano);
```

Now you can use the `fadeIn` class name to *"fade in"* your elements.

```html
<div class="fadeIn">Hello world!</div>
```

Or use the `fadeIn` animation directly to apply custom tween settings.

```html
<div style="animation: fadeIn 1s linear;">Hello world!</div>
```
