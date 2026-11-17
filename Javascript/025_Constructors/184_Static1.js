class Testrunner1{
    static totalRuns = 0;
    static passCount = 0;
    constructor(name,isPass){
        this.name=name;
        this.pass=isPass;
        Testrunner1.totalRuns++;
        if(this.pass){  //isPass instead of this.pass will also work
            Testrunner1.passCount++;
        }
    }
}

let tc1 = new Testrunner1("loginTest", false);
let tc2 = new Testrunner1("dashboardTest", true);
let tc3 = new Testrunner1("listProdsTest", false);
let tc4 = new Testrunner1("logoutTest", true);

console.log("TotalRuns: " + Testrunner1.totalRuns);
console.log("PassCount: " + Testrunner1.passCount);

console.log(tc1.name);
console.log(tc1.pass);

console.log(tc2.name);
console.log(tc2.pass);

console.log(tc3.name);
console.log(tc3.pass);

console.log(tc4.name);
console.log(tc4.pass);
