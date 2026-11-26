class TestDataStorage<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getFirst(): T {
        return this.items[0]!;
    }
    getAll(): T[] {
        return this.items;
    }

    count(): number {
        return this.items.length;
    }
}
let statusCodeStorage = new TestDataStorage<number>();
let testnameStorage = new TestDataStorage<string>();

statusCodeStorage.add(200);
statusCodeStorage.add(404);
statusCodeStorage.add(500);

testnameStorage.add("LoginTest");
testnameStorage.add("SignupTest");
testnameStorage.add("DashboardTest");

console.log(statusCodeStorage.getFirst());
console.log(testnameStorage.getFirst());
console.log(statusCodeStorage.getAll());
console.log(testnameStorage.getAll());
