function step1(callback) {
    console.log("Open browser");
    callback();
}

function step2(callback) {
    console.log("Launching the page by navigating to the URL");
    callback();
}

function step3(callback) {
    console.log("Enter the credentials");
    callback();
}

function step4(callback) {
    console.log("Click login button");
    callback();
}

step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                console.log("All Done!");
            });
        });
    });
});
