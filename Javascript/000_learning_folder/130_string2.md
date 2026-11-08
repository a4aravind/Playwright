# `charAt(0)` vs `at(0)`

Source: [130_string2.js](../016_String/130_string2.js)  
HTML version: [130_string2.html](130_string2.html)

Both methods return the character at index `0`:

| Feature | `abc.charAt(0)` | `abc.at(0)` |
|---|---|---|
| Result | `"a"` | `"a"` |
| Negative indexes | Not supported; returns `""` | Counts from the end; `abc.at(-1)` returns `"c"` |
| Index out of range | Returns `""` | Returns `undefined` |
| Browser support | Older and widely supported | Newer (ES2022) |