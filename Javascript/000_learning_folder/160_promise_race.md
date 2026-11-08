# Promise.race() — The First Promise to Settle

Source: [160_Promise_race.js](../020_Promise/160_Promise_race.js)
HTML version: [160_promise_race.html](160_promise_race.html)

`Promise.race()` waits for the first promise to settle. If both promises fulfill, it gives you the result from whichever fulfilled first.

## Example

```js
let fastServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast 100ms");
    }, 100);
});

let slowServer = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Slow 500ms");
    }, 500);
});

Promise.race([fastServer, slowServer]).then(function (winner) {
    console.log("Winner:", winner);
});
```

The delay is the second argument to `setTimeout`. With delays of 100 ms and 500 ms, the output is:

```text
Winner: Fast 100ms
```

## What about the slower promise?

`Promise.race()` only returns the first result; it doesn't return the slower result or cancel the slower promise. To wait for both results, use `Promise.all()`. Its results are in the same order as the promises in the array:

```js
Promise.all([fastServer, slowServer]).then(function ([fastResult, slowResult]) {
    console.log("Loser:", slowResult);
});
```

This prints `Loser: Slow 500ms` after both promises have fulfilled.

## In short

- `Promise.race()` gives the result of the first promise to settle.
- `Promise.all()` waits for all promises to fulfill and returns every result.
- `Promise.race()` does not cancel promises that settle later.