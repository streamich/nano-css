# `safe` Addon

`nano-css` uses `.insertRule` in production to insert CSS rules into CSSOM. However, if the
rule is not recognized by a brwoser (for example, it might happen if you use some pseudo-selector
that is not supported by the brwoser) it will throw. For performance reasons, `nano-css` does not
catch those errors. This addon will safely catch all insertion errors and log them.


## Installation

Simply install `safe` addon. Read more about the [Addon Installation](./Addons.md#addon-installation).
