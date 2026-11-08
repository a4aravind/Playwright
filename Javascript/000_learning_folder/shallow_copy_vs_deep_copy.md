# Shallow Copy vs Deep Copy (ELI5)

Think of an object as a toy box, and an object variable as a note pointing to that box.

## Same reference: both variables point to one object

```js
let obj1 = { val: 10 };
let obj2 = obj1;

obj2.val = 99;
console.log(obj1.val); // 99
```

`obj2 = obj1` copies the reference (the note), not the object. Both variables point to the same object, so changing it through either variable is visible through the other. This is often casually called “call by reference.”

Technically, JavaScript passes values. For objects, the value being copied is a reference to the object.

## Shallow copy: a new outer object, shared nested objects

```js
const original = { name: "Sam", toy: { color: "red" } };
const shallow = { ...original };

shallow.name = "Alex";
console.log(original.name); // "Sam" — top-level values are separate

shallow.toy.color = "blue";
console.log(original.toy.color); // "blue" — nested object is shared
```

The spread syntax creates a new outer object, but the nested `toy` object is still shared.

## Deep copy: separate objects all the way down

```js
const original = { name: "Sam", toy: { color: "red" } };
const deep = structuredClone(original);

deep.toy.color = "blue";
console.log(original.toy.color); // "red" — nested object is separate
```

`structuredClone()` creates a separate copy of the object and its nested data.

## In short

- `obj2 = obj1`: both variables refer to the same object.
- Shallow copy: new outer object, but nested objects may still be shared.
- Deep copy: nested objects are copied too, so changes do not affect the original.