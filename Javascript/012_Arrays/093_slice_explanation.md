`slice(start, end)` returns a new array from `start` **up to, but not including,** `end`. Negative indices count backward from the array’s end.

For `arr = [1, 2, 3, 4, 5]`:

```js
arr.slice(-1, -3)
```

- `-1` points to the last item, `5` (index `4`).
- `-3` points to `3` (index `2`).
- `slice` moves forward from start to end, so the end index is before the start index. It returns an empty array: `[]`.

To get `[3, 4]`, use `arr.slice(-3, -1)`.