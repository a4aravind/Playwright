let a1 = {
    name : "Aravind"
};

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);