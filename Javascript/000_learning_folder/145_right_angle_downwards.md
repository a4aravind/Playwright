# Downward Right-Angled Triangle (ELI5)

Source: [145_RightAngleDownwards.js](../018_MultiDimensionalArray/145_RightAngleDownwards.js)
HTML version: [145_right_angle_downwards.html](145_right_angle_downwards.html)

This program prints a triangle of stars. It starts with a wide row and makes each next row one star shorter.

```text
* * *
* *
*
```

## Think of it like this

Imagine putting stars in three rows:

- The first row gets 3 stars.
- The next row gets 2 stars.
- The last row gets 1 star.

The loops are like two helpers: the outer loop picks how many stars a row should have, and the inner loop puts those stars on that row.

## What each part does

```js
let n = 3;
```

`n` is the starting number of stars in the first row.

```js
for (let i = n; i >= 1; i--) {
```

The outer loop starts `i` at `3`. After each row, `i--` subtracts one. It keeps going while `i` is at least `1`, so the row sizes are `3`, then `2`, then `1`.

```js
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
```

Each time a new row starts, the inner loop starts `j` back at `1`. It writes `"* "` while `j` is less than or equal to `i`. That means it writes exactly `i` stars. `process.stdout.write` does not move to a new line, so the stars stay together on the same row.

```js
    console.log("");
```

When that row's stars are done, this moves the output to the next line.

## Follow one loop at a time

| Outer loop `i` | Inner loop writes | Row |
|---:|---:|---|
| 3 | 3 stars | `* * *` |
| 2 | 2 stars | `* *` |
| 1 | 1 star | `*` |

After the row with 1 star, `i` becomes `0`. Since `0 >= 1` is false, the outer loop stops.

## In short

- `i` decides how many stars the current row gets.
- `j` counts those stars.
- `i--` makes each new row shorter.
- `process.stdout.write` keeps stars on the same row; `console.log("")` starts the next row.