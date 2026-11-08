# Promise and `await` Reference

This reference covers the examples in `Javascript/019_Callback`, `020_Promise`, and `021_Async_Await`. “Await?” means whether to use `await` when you need the resolved value before continuing; Promise chains using `.then()` are an alternative.

## File-by-file: `021_Async_Await/162`–`170`

| File | Promise-returning functions/calls | Where `await` is used or needed |
|---|---|---|
| `162_async_await.js` | `apiRequest()` returns a Promise. `runApiRequest()` is `async`, so it also returns a Promise. | `runApiRequest()` correctly awaits `apiRequest()`. The top-level `runApiRequest()` call is not awaited; a caller that must wait for completion should await/return it or attach `.catch()`. |
| `163_async_await1.js` | `testAPI()` is `async`, so it returns a Promise. `Promise.reject(...)` returns a rejected Promise. | The rejection is awaited inside `try/catch`, so it is handled there. The top-level `testAPI()` call is not awaited; the example handles its shown rejection internally. |
| `164_playwright_eg.ts` | Playwright's `page.goto(...)` returns a Promise. The async test callback returns a Promise. | `page.goto(...)` is correctly awaited. Playwright's test runner waits for the async callback; do not await the `test(...)` registration call. |
| `165_playwright_eg1.ts` | `getExmaple()` is `async` and returns a Promise; `page.goto(...)` returns a Promise; the async test callback returns a Promise. | Both `page.goto(...)` and `getExmaple()` are correctly awaited. Playwright waits for the callback. |
| `166_sequential_execution.js` | `apiCall(name)` returns a Promise. `sequentialTest()` is `async` and returns a Promise. | The three `apiCall(...)` calls are correctly awaited one after another. The top-level `sequentialTest()` invocation is not awaited; await/return it when its caller needs completion. |
| `167_Parallel_execution.js` | `apiCall(name)` returns a Promise. `Promise.all(...)` returns a Promise. `parallelTest()` is `async` and returns a Promise. | `Promise.all(...)` is correctly awaited, running the API calls concurrently. The top-level `parallelTest()` invocation is not awaited; await/return it when its caller needs completion. |
| `168_Flaky.js` | `createFlakyAPIs(...)` is synchronous and returns a function. Calling that returned function returns a fulfilled or rejected Promise. `retryTesting()` is `async` and returns a Promise. | The current `await createFlakyAPIs(2)` does not call or await an attempt; it just assigns the returned function to `s`. Call the function and await it (see correction below). `retryTesting()` itself is also invoked without awaiting it. |
| `169_interview.js` | `testFlow()` is `async` and returns a Promise. Each `Promise.resolve(...)` returns a Promise. | The three resolved Promises are correctly awaited in sequence. The top-level `testFlow()` invocation is not awaited; await/return it when its caller needs completion. |
| `170_interview1.js` | `apiTest()` is `async` and returns a Promise. `Promise.resolve(...)` returns a Promise. The commented-out `riskyTest()` would also return a Promise if enabled. | `apiTest()` correctly awaits its Promise inside `try/catch/finally`. Its top-level invocation is not awaited; the shown rejection path is caught internally. The commented-out `riskyTest()` also has an awaited operation and a local catch. |

| Function or call | Returns a Promise? | Should you `await` it? | Example / notes |
|---|---|---|---|
| `new Promise(...)` | Yes | Usually consume it with `await` or `.then()` | Creates a Promise; used in `020_Promise/155`–`157` and `021_Async_Await/162`, `166`, `167`. |
| `Promise.resolve(value)` / `Promise.reject(reason)` | Yes | Yes, if you need the settled value or rejection at this point; otherwise use `.then()` / `.catch()` | Used in `020_Promise/158`, `161` and `021_Async_Await/163`, `168`–`171`. |
| `Promise.all(iterable)` | Yes | Yes, to get all values before continuing; alternatively chain `.then()` | Rejects as soon as one input rejects. Used in `020_Promise/158` and `021_Async_Await/167`. |
| `Promise.allSettled(iterable)` | Yes | Yes, to inspect all outcomes; alternatively chain `.then()` | Waits for every input to settle. Used in `020_Promise/159`. |
| `Promise.race(iterable)` | Yes | Yes, to get the first settled outcome; alternatively chain `.then()` | Used in `020_Promise/160`. |
| `.then(onFulfilled)` | Yes (a new chained Promise) | Optional: use `await` if you need the chain's final value/order; otherwise continue chaining | Return a Promise from the callback to make the chain wait for it. |
| `.catch(onRejected)` | Yes (a new chained Promise) | Optional; use it to wait for the recovered result or handle the chain with `await`/`try...catch` | Used for Promise rejection handling in `020_Promise/155`–`161`. |
| `.finally(onFinally)` | Yes (a new chained Promise) | Optional; it is part of the chain and does not by itself consume the result | Runs after settlement; used in `020_Promise/156`, `158`–`161`. |
| `apiRequest()`, `apiCall(name)` | Yes | Yes when you need the response before the next step | User-defined Promise-returning functions in `021_Async_Await/162`, `166`, `167`. |
| `openBrowser()`, `LoadHomePage()`, `EnterCredentials()`, `Login()` | Yes | Not in the current example: the `.then()` chain consumes the first three. Await if rewriting as sequential async/await code. | `020_Promise/157`; each returns a Promise, but `Login()` is defined and not called. |
| `sequentialTest()`, `parallelTest()`, `runApiRequest()`, `testAPI()`, `testFlow()`, `apiTest()`, `retryTesting()`, `test()` (in `171`) | Yes, because they are `async` functions | Await when a caller must wait for the function to finish; otherwise handle its returned Promise with `.then()`/`.catch()`. | `async` functions always return Promises, even when they return no explicit value. |
| `getExmaple()` | Yes, because it is `async` | Yes if the caller needs its result; the example correctly awaits it. | `021_Async_Await/165`; resolves to `"abc"`. |
| `retry()` returned by `createFlakyAPIs(...)` | Yes, when called | Yes: await the call `retry()`, not the factory that returns it. | `021_Async_Await/168`; see correction below. |
| `page.goto(url)` | Yes (Playwright navigation Promise) | Yes, or return it from the test, so the test waits for navigation | `021_Async_Await/164`–`165`. |
| `test(title, async ({ page }) => ...)` callback | The async callback returns a Promise | No extra `await` on the `test(...)` registration; Playwright runs and waits for the async test callback. Await asynchronous page/API calls inside it. | `021_Async_Await/164`–`165`. |
| Async callback passed to `test(...)` in `019_Callback/148` | The async callback returns a Promise | The shown custom `test` calls the callback without returning or awaiting it, so it does not wait for that Promise. | Different from Playwright's `test` runner. |
| `setTimeout(callback, delay)` | No; it returns a timer handle | No. To await a delay, explicitly wrap it in a Promise. | Callback examples in `019_Callback/150`–`151`; also used inside Promise constructors in `020_Promise/160` and `021_Async_Await/166`–`167`. |
| Callback-based functions such as `processOrder(...)` and `step1(...)`–`step4(...)` | No Promise is returned by the shown implementations | No; their callback controls what runs next | `019_Callback/147`–`154`. The external callback APIs in `152` have no implementation here, so their return types cannot be inferred. |

## Important correction in `021_Async_Await/168_Flaky.js`

`createFlakyAPIs(2)` returns a function, not a Promise. Awaiting the factory therefore does not wait for an attempt. Call the returned function and await that Promise:

```js
async function retryTesting() {
    const retry = createFlakyAPIs(2);
    const result = await retry();
    console.log(result);
}
```

## Rule of thumb

- Use `await` inside an `async` function when the next statement needs the settled value or must wait for completion.
- Use `return` when passing a Promise through a function or Promise-chain callback.
- Use `.then()` / `.catch()` instead of `await` when that style fits the surrounding code.
- Do not add `await` to ordinary synchronous calls or callback registration.
