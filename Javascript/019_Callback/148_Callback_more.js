function test(item, callmewhenready) {
    console.log(`Just printing the item name as ${item}...`);
    callmewhenready();
}

test("This is somewhat like Typescript", async (page) =>{
});
