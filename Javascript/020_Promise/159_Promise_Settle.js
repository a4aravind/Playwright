Promise.allSettled([
    Promise.resolve("Test 1 passsed"),
    Promise.reject("Test 2 failed"),
    Promise.resolve("Test 3 passed")
]).then(function (results){
    results.forEach(function(res, i){
        console.log("Test " + (i+1) + ":", res.status, "->", res.value || res.reason);
    });
})