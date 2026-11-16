let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // latest value 
console.log(config);    //{ browser: 'Chrome', timeout: 5000 }
delete config.browser; //deletes the property
console.log(config);    //{ timeout: 5000 }