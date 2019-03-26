# `cssom` Addon

Adds a utility `createRule` function that creates `CSSRule` objects. The `.createRule`
function offers the following features:

1. It creates plain `CSSRule`s and ones that with media query.
2. It places `CSSRules`s with media query into a different style sheet, because placing
   them in the same style sheet throws.
3. It adds to the rule object index property `rule.index`, which is that rule's
   insertion index in the style sheet.
4. In case rule has media query, the returned media query rule will still have top
   level `.style` and `.styleMap` properties, which can be used to set the styling.

```js
nano.createRule(selector, mediaQueryAtRulePrelude?);
```


## Usage

Create `CSSRule` object.

```js
const rule = nano.createRule('.my-component');
const rule = nano.createRule('.my-component', '@media only screen and (max-width: 600px)');
```

Use `rule` object to set CSS.

```js
rule.style.color = 'red';
rule.style.setProperty('color', 'green');
```
