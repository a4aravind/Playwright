let testResults = ["Pass", "Fail", "Pass", "Fail", "Skip"]; 

testResults.forEach((result, index) => {
        console.log("Test result for test case " + (index + 1) + " is: " + result);
});
