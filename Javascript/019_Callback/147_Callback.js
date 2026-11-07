function processOrder(item, callback) {
    console.log(`Processing order for ${item}...`);
    callback();
}

// First method:

function orderCompleted() {
    console.log('Order completed through normal function!');
}
processOrder('Laptop', orderCompleted);


// Second method:(Anonymous function)

processOrder("Mobile", function() {
    console.log('Order completed through anonymous function!');
});


//  Third method:(Arrow function)

processOrder("Tablet", () => {
    console.log('Order completed through arrow function!');
});
