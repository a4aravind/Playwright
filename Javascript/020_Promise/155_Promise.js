let apiCall = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User data" });
});

apiCall.then(function (response){ // Resolve
    console.log(response);
});


let testRun = new Promise(function (resolve, reject) {
    reject("Assertion failed");
});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
});