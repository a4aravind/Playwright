let marks = [45, 87, 91, 88, 78];
let grades = marks.map(i => i > 80 ? "Distinction": "Pass");
console.log(grades);

let passes = marks.filter(z => z > 80);
console.log(passes);
