# JavaScript, TypeScript & Playwright Interview Notes

Visual refresher for the 228 JavaScript/TypeScript lab scripts in this course.

## Revision route

```text
JavaScript basics -> Functions and data -> Async -> Modules/OOP
                  -> TypeScript -> Playwright E2E tests
```

In interviews, explain the rule, show a small example, then mention a pitfall or trade-off.

## 1. Values, declarations, and scope

- JavaScript primitives: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.
- `undefined` commonly means unassigned/absent; `null` is intentionally empty. `typeof null` returns `"object"` for historical reasons.
- Prefer `const` by default, use `let` when rebinding, and avoid `var` in new code.
- `const` prevents rebinding, not mutation of an object or array stored in the binding.
- `let` and `const` are block-scoped. `var` is function-scoped.
- Hoisting does not make every declaration safe to use early: `var` is initialized to `undefined`; `let` and `const` are inaccessible in the temporal dead zone until their declaration executes.
- A JavaScript `number` represents both integer and decimal values. Binary, octal, and hexadecimal literals are supported: `0b1010`, `0o10`, `0xA`.
- Sparse-array holes are not the same as explicit `undefined`. `[3,,1,,]` has length 4.

```js
console.log(greeting); // undefined
var greeting = "Hello";

{
  // console.log(score); // ReferenceError: temporal dead zone
  let score = 10;
}
```

## 2. Operators and branching

- `==` may coerce types; `===` compares without coercion. Prefer strict equality unless coercion is intentional.
- `&&` and `||` short-circuit and return operands, not necessarily Boolean values.
- `||` uses the right side for any falsy left value; `??` only falls back for `null` or `undefined`.
- Prefix `++x` evaluates to the incremented value; postfix `x++` evaluates to the previous value.
- Ternaries suit one concise choice. Use `if/else` when nested ternaries obscure the decision.
- `switch` uses strict comparison. Include `break` unless fall-through is intentional; stacked cases can share a branch.
- Validate input ranges first, then order mutually exclusive ranges from highest to lowest.

```js
0 || 10       // 10
0 ?? 10       // 0
"" ?? "guest" // ""
```

## 3. Loops and arrays

| Tool | Best fit | Reminder |
|---|---|---|
| `for` | Index, bounds, step control, `break`/`continue` | Watch off-by-one bounds and infinite loops. |
| `for...of` | Values from arrays and other iterables | Use `entries()` when index and value are both needed. |
| `for...in` | Enumerable property keys | For arrays it gives keys, not the preferred value iteration. |
| `forEach` | Side effects for each item | Cannot be stopped with `break`; does not sequence async callbacks. |

- `map` transforms each element and returns a new array.
- `filter` keeps matching elements; `find` returns the first match; `some` answers whether any match.
- Default `sort()` compares as strings and mutates the array. For numbers, use `sort((a, b) => a - b)`. Copy first if preserving the original matters.
- Assignment aliases the same array/object. Spread and `slice()` make shallow copies; nested object references remain shared.
- `structuredClone()` can deep-clone supported data, but it is not suitable for every object type.

```js
const alias = original;       // same array
const copy = [...original];    // new outer array
const shallow = { ...user };   // nested values may still be shared
```

## 4. Functions, scope, and closures

```js
function greet(name) { return `Hi ${name}`; }
const greetFn = function (name) { return `Hi ${name}`; };
const greetArrow = name => `Hi ${name}`;
```

- Function declarations, function expressions, and arrow functions have different syntax and hoisting behavior.
- Arrow functions capture lexical `this`; they are not constructors and have no own `arguments`.
- Rest collects arguments (`function f(...items) {}`); spread expands an iterable (`f(...items)`).
- A function without an explicit `return` returns `undefined`.
- A closure is a function that retains access to its lexical environment after the outer function returns. Closures support factories, callbacks, and private state.
- `var` is function-scoped; `let`/`const` are block-scoped. An IIFE is an immediately invoked function expression, historically used to create private scope.

```js
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
next(); // 1
next(); // 2
```

## 5. Strings, objects, and identity

- Strings are immutable. Common search/check methods include `includes`, `startsWith`, `endsWith`, `indexOf`, and `lastIndexOf`.
- Use dot notation for known object keys (`user.name`) and bracket notation for dynamic keys (`user[key]`).
- JavaScript passes values. For objects, the value is a reference to an object; two variables can refer to the same mutable object.
- A shallow copy separates only the outer container. A nested object can still be shared.
- Multidimensional arrays are arrays containing arrays; nested loops are a common way to visit rows and cells.

```js
const a = { address: { city: "Kochi" } };
const b = { ...a };
b.address.city = "Pune"; // a.address.city also changes
```

## 6. Callbacks, promises, and async/await

```text
Callback chain: Open -> Login -> Enter details -> Click -> Verify
                (nested callbacks become hard to maintain)

Promise flow:   pending -> fulfilled(value) -> then(...)
                       \\-> rejected(reason) -> catch(...)
                                       finally(...) -> cleanup
```

- A callback is a function passed to another function to run later (or immediately). Deeply nested callbacks make sequencing and error handling difficult.
- A promise is pending, fulfilled with a value, or rejected with a reason. `then` chains values; errors/rejections propagate to `catch`; `finally` is useful for cleanup.
- `Promise.all`: all must fulfill; rejects when an input rejects.
- `Promise.allSettled`: waits for all outcomes and reports each status.
- `Promise.race`: first settled outcome wins, whether fulfilled or rejected. `Promise.any` waits for the first fulfillment.
- An `async` function always returns a promise. `await` pauses that function until settlement; it does not block the JavaScript thread.
- Awaiting independent calls one by one serializes them. Start independent work first and await `Promise.all`; keep dependent steps sequential.
- Use `try/catch/finally` for awaited failures and cleanup. Invoke a function to run it: awaiting a function value is not the same as calling it.
- For UI tests, wait for an observable condition instead of an arbitrary delay.

```js
const [auth, user] = await Promise.all([getAuth(), getUser()]);
```

## 7. Modules and object-oriented JavaScript

- ES modules use `export`/`import`. Named exports are imported with braces; a default export is imported without braces.
- Match module syntax to the runtime configuration. This workspace has a CommonJS root package while some lessons use ESM syntax; those examples may need ESM mode or transpilation.
- A class defines a constructor and methods; `new` creates an instance. Instance state belongs to each object; `static` members belong to the class.
- Encapsulation keeps state behind an API. JavaScript private fields use `#field`; validate updates inside methods.
- `extends` reuses/overrides behavior. In a derived constructor, call `super()` before using `this`.
- JavaScript classes do not support traditional method overloading by parameter signature. TypeScript overload signatures compile to one implementation, not separate runtime methods.
- Mixins compose capabilities when a class needs multiple reusable behaviors.
- Runtime polymorphism means the same method call can use an overridden implementation for the object's class.

## 8. TypeScript essentials

- The labs cover `string`, `number`, `boolean`, array types (`number[]`, `Array<string>`), object shapes, parameters, and return types.
- `void` indicates no useful return value. `never` means execution cannot complete normally (for example, a function always throws).
- `any` opts out of type checking for a value; `unknown` requires checking/narrowing before use and is safer at untrusted boundaries.
- TypeScript checks during development/build; types are erased at runtime. Validate external API/JSON/user input at runtime too.
- Inferred types are often sufficient; add annotations where they clarify contracts or constrain a public API.

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

function logGreeting(name: string): void {
  console.log(greet(name));
}
```

Run the course example from the workspace:

```powershell
npm install
npx ts-node .\Javascript\031_Typescript\214_typescript.ts
```

The workspace pins `ts-node` 10.9.x with TypeScript 5.9.x; prefer the local project runner over a global runner.

## 9. Playwright test workflow

```text
test runner -> browser project -> page fixture -> role locator/action
          -> web-first assertion -> report / trace

Arrange -> Act -> Assert
```

```ts
import { test, expect } from '@playwright/test';

test('opens the getting-started page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});
```

- Prefer user-facing locators such as `getByRole`.
- Web-first assertions retry until the condition is met or times out.
- Keep tests independent; parallel execution assumes no shared mutable state.
- The course config uses `./tests`, Chromium/Firefox/WebKit projects, CI retries, an HTML reporter, and trace capture on first retry.
- The explicit Playwright sample is introductory: navigation, role-based actions/assertions, and config.

## 10. Interview quick recall

1. **`==` vs `===`?** `==` coerces types; `===` does not. Prefer strict equality.
2. **Is `const` immutable?** The binding cannot be reassigned; the referenced object can still mutate.
3. **What is a closure?** A function retaining access to its lexical environment.
4. **`map` vs `forEach`?** `map` returns transformed data; `forEach` performs side effects.
5. **When use `Promise.all`?** Independent work should run concurrently and all results are required.
6. **Does `await` parallelize calls?** No. Use `Promise.all` for independent operations.
7. **Shallow vs deep copy?** Shallow copies the outer container; nested references remain shared.
8. **TypeScript `void` vs `never`?** No useful return value vs no normal completion.
9. **Why role locators?** They reflect user-visible semantics and make tests less coupled to implementation.

Answer pattern: **definition -> tiny example -> consequence/pitfall -> when to choose it.**

## Course module map

- `001–003`: basics, identifiers, literals, null/undefined
- `004–007`: operators, conditions, switch
- `008–011`: input and loops
- `012`, `018`: arrays, transforms, copying, multidimensional arrays
- `013–015`: functions, closures, hoisting, TDZ
- `016–017`: strings and objects
- `019–022`: callbacks, promises, async/await, modules
- `023–028`: classes, constructors, encapsulation, inheritance, polymorphism
- `029–031`: interview examples and TypeScript basics
- `024_Playwright`: test config and example specs

Last memory hook: in each example ask **which binding? what value? same object or copy? when does it run?**
