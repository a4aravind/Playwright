interface  Calculator{
    add(a:number, b:number): number;
    sub(a:number, b:number): number;
}

const calc1: Calculator = {
    add: (a:number, b:number): number => {
        return a + b;
    },
    sub: (a:number, b:number): number => {
        return a - b;
    }   
}

console.log(calc1.add(10, 20));
console.log(calc1.sub(30, 20));
