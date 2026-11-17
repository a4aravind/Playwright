let a = 10;
class TestRunner {
    static totalTests = 0;
    static passCount = 0;
    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;
        if (passed) {
            TestRunner.passCount++;
        }
        console.log(a);
    }
    
    // non static fn - belongs to object
    pramod_fn() {
        return this.name;
    }
    
    //static fn - belongs to class
    static summary() {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}
let t1 = new TestRunner("Login", true);
console.log(t1.pramod_fn()); //  call in this way(via an object) to work, the last statement wont work since it is not class method
console.log(TestRunner.summary());

new TestRunner("Signup", false);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);
console.log(TestRunner.summary());
//console.log(TestRunner.pramod_fn()); won't be able to call the pramod_fn since it is non static
