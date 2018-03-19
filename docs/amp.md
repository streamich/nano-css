# `amp` Addon

Sets [restrictions](https://www.ampproject.org/docs/design/responsive/style_pages) and displays AMP style sheet
warnings for AMP apps.

- limits style sheet size to 50Kb
- displays error messages in development, if `!important` is used
- removes `!important` modifiers
- displays error messages in development, if `behavior` or `-moz-binding` banned declarations are used
- removes `behavior` and `-moz-binding` banned declarations
- displays error messages in development, if `.-amp-*` or `i-admp-*` selectors are used
- removes CSS rules that use `.-amp-*` or `i-admp-*` selectors


## Example

Install and configure `amp` addon:

```js
import {addon as addonAmp} from 'nano-css/addon/amp';

addonAmp(nano);
```

or

```js
addonAmp(nano, {
    limit: 50000,
    removeImportant: true,
    removeReserved: true,
    removeBanned: true,
});
```

, where

- `limit` &mdash; maximum size of style sheet on server, defaults to `50000`
- `removeImportant` &mdash; whether to remove `!important` modfiers, defaults to `false`
- `removeReserved` &mdash; whether to remove rules with reserved selectors, defaults to `false`
- `removeBanned` &mdash; whether to remove banned declarations, defaults to `false`


## Installation

Read more about the [Addon Installation](./Addons.md#addon-installation).
