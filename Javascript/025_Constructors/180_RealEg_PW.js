class TestCase{
    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display(){
        console.log("TestCase name: " + this.name + " & status: " + this.status + " & priority: " + this.priority);
    }
}

let tc1 = new TestCase("loginTest", "New", "High");
let tc2= new TestCase("dashboard", "More info", "Medium");

tc1.display();
tc2.display();
