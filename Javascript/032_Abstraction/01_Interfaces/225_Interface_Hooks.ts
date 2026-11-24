interface TestHook{
    (testName:string) : void;           // function without name, with one parameter and return type void
}

let beforeEachHook: TestHook = function (testName: string): void {
    console.log("[BEFORE] Setting up: " + testName);
}

let afterEachHook: TestHook = function (testName: string): void {
    console.log("[AFTER] Tearing down: " + testName);
};

beforeEachHook("Login Test");
afterEachHook("Logout Test");
