class Dhanlaxmi {
    #balance;
    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }
    getBalance() {
        return this.#balance;
    }

    setBalance(balance, throughCashier) {
        if (throughCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }
}
let myAcc = new Dhanlaxmi("Aravind", 500);
console.log(myAcc.getBalance());
myAcc.setBalance(100000, true);
console.log(myAcc.getBalance());

let nomine = new Dhanlaxmi("Lekha", 2000);
console.log(nomine.getBalance());
nomine.setBalance(300000, false);
console.log(nomine.getBalance());
