class Testrunner{
    static totalRuns = 0;
    static passCount = 0;
    constructor(name,isPass){
        this.name=name;
        Testrunner.totalRuns++;
        if(isPass){
            Testrunner.passCount++;
        }
    }
}

let tc1 = new Testrunner("loginTest", true);
let tc2 = new Testrunner("dashboardTest", true);
let tc3 = new Testrunner("listProdsTest", false);
let tc4 = new Testrunner("logoutTest", true);

console.log("TotalRuns: " + Testrunner.totalRuns);
console.log("PassCount: " + Testrunner.passCount);

console.log(tc1.name);
console.log(tc2.name);
console.log(tc3.name);
console.log(tc4.name);
