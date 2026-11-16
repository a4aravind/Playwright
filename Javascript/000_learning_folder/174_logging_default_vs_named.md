# Default and Named Exports (ELI5)

Source: [174_logging.js](../022_Import_export/174_logging.js) and [logger.js](../022_Import_export/logs/logger.js)
HTML version: [174_logging.html](174_logging.html)

Think of a JavaScript file like a toolbox. It can offer one main tool and other tools you can choose by name.

In this example, `log` is the default export, and `logNormal` is a named export:

```js
export default function log(message) {
    console.log("[LOG: " + message + "]");
}

export function logNormal(message) {
    console.log("[Non-default LOG: " + message + "]");
}
```

## How to import them

```js
import log, { logNormal } from "./logs/logger.js";

log("hello");
logNormal("hello");
```

- The default export, `log`, is imported without curly braces. You can choose its local name when importing it.
- The named export, `logNormal`, is imported inside curly braces using its exported name.

## A simple analogy

- The default export is the main item in the toolbox.
- A named export is an extra tool you ask for by its label.

## In short

- A file can have one default export.
- A file can have multiple named exports.
- Use the default export when importing the main item; use curly braces for named exports.
