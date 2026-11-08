# Why does `a.status` become `"fail"`?

Source: [133_object2.js](../017_Objects/133_object2.js)  
Diagram: [133_object2_diagram.html](133_object2_diagram.html)

```js
let a = { status: "pass" };
let b = a;  // Copy the reference
b.status = "fail";
console.log(a.status);
```

Here is what happens, one line at a time:

1. **Create one object.**
   ```js
   let a = { status: "pass" };
   ```
   JavaScript creates an object with a `status` property whose value is
   `"pass"`. The variable `a` refers to that object.

2. **Make `b` refer to the same object.**
   ```js
   let b = a;
   ```
   This copies the reference (the way to reach the object), not a new object.
   Think of `a` and `b` as two labels attached to the same toy box.

   ```text
   a ───┐
        ├──> { status: "pass" }  (one object)
   b ───┘
   ```

3. **Change the object's property through `b`.**
   ```js
   b.status = "fail";
   ```
   JavaScript follows `b` to the object and replaces its `status` value with
   `"fail"`. Because `a` points to that same object, the value seen through
   `a` is now `"fail"` too.

   ```text
   a ───┐
        ├──> { status: "fail" }  (same object, now changed)
   b ───┘
   ```

4. **Read the value through `a`.**
   ```js
   console.log(a.status);
   ```
   JavaScript follows `a` to the shared object and reads its current
   `status`. That value is `"fail"`, so the console prints:

```text
fail
```

**In short:** `b.status = "fail"` changes the shared object, not just a
private copy belonging to `b`. `a` still points to that object, so
`a.status` reads the updated value.

## `charAt(0)` vs `at(0)`

Both methods return the character at index `0`:

| Feature | `abc.charAt(0)` | `abc.at(0)` |
|---|---|---|
| Result | `"a"` | `"a"` |
| Negative indexes | Not supported; returns `""` | Counts from the end; `abc.at(-1)` returns `"c"` |
| Index out of range | Returns `""` | Returns `undefined` |
| Browser support | Older and widely supported | Newer (ES2022) |