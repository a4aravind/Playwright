{
    console.log(a);
    let a = 10;
}
//Enters into TDZ, Hoisted but no value initialized and gives Reference error
//if it was var, hoisted and with value undefined and wont give Reference error