const user = {
    name: "Aravind",
    getMyName() {
        return this.name;
    }
}

console.log(`Printing Property, ${user.name}`);
console.log(`Printing Method, ${user.getMyName()}`);