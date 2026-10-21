// every — ALL must pass
console.log([80, 90, 85].every(i => i >= 70));
console.log([80, 60, 85].every(i => i >= 70));

console.log([80, 90, 85].some(i => i >= 90));
console.log([80, 60, 85].some(i => i <= 50));
