let statuses = ["pass", "fail", "skip"];

console.log(statuses[3]);
console.log(statuses[-4]);
console.log(statuses[4]);
console.log(statuses[0]);
console.log(statuses[1]);

console.log(statuses);
statuses[2] = "block";
console.log(statuses);

statuses[3] = "skip";
console.log(statuses);