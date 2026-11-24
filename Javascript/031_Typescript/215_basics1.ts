let name: string = "Aravind";
let age: number = 25;
let isStudent: boolean = true;
let distance_to_moon: number = 384400; // in kilometers

let pi = 3.14159; //No float concept in TypeScript
let nothing: null = null;
let undefinedValue: undefined = undefined;

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

let message: string = "Hello, TypeScript!";

let anything: any = "This can be any type which can be decided later"; //avoid this when possible
let unknownValue: unknown = "This can be any type but needs to be checked before using"; //avoid this when possible but safer than any