class BaseTest{
    setUp(){
        console.log("Base: open browser");
    }
}

class APIPage extends BaseTest{
    setUp(){
        console.log("APITest: open browser");
    }
}


let bt = new BaseTest();
let apit = new APIPage();
bt.setUp();
apit.setUp();