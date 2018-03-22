# `extract` Addon

This addon allows you to extract CSS styles into an external style sheet at build time. This
addon is not all-in-one solution, but rather the lowest level that enables style extraction
at build time, here is what it does:

- injects styles from [`sheet()`](./sheet.md), which are normally injected lazily
- renders at least once [`jsx()`](./jsx.md) and [`style()`](./style.md) components with default props

See demo [here](https://github.com/streamich/nano-css-extract-demo).


## Installation

Simply install `extract` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
