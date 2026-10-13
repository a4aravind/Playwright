let s = "Hello, World!";
console.log(typeof s); // Output: string, because s is a string variable
s+= " How are you?"; // Concatenation using += operator
console.log(s); // Output: Hello, World! How are you?, because the string has been concatenated with the new text

console.log("Hello", "Araivnd"); // Output: Hello Araivnd, because the comma operator separates the two strings and logs them with a space in between
console.log("Hello" + "Araivnd"); // Output: Hello Araivnd, because the + operator concatenates the two strings with a space in between

console.log(1,2,3,4,"Hello",true); // Output: 1 2 3 4 Hello true, because the comma operator separates the values and logs them with a space in between