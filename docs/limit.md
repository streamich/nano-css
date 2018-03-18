# `limit` Addon

Limits the size of server-side style sheet, in bytes.


## Usage

Install `limit` addon, specifying the maximum size of server-size style sheet in bytes as
the second argument. If not specified, defaults to `50000`, or 50Kb, which is the maximum
style sheet size for Google AMP (See [`amp` addon](./amp.md) for more).

```js
import {addon as addonLimit} from 'nano-css/addon/limit';

addonLimit(nano, 100000);
```


## Installation

Read more about the [Addon Installation](./Addons.md#addon-installation).
