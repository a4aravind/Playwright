let responseTime = 560;
let sla = 750;
let isSlaMet = responseTime <=sla ? "SLA Met" : "SLA Not Met"; // Using ternary operator to check if responseTime is less than or equal to sla
console.log(isSlaMet); // Output: SLA Met, because responseTime is less than sla

console.log(`ResponseTime" ${responseTime} ms - ${isSlaMet}`);

console.log(`What is the SLA Time - ${sla} ms`);