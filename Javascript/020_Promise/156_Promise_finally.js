let apiCall = new Promise(function(resolve, reject){
      resolve({status : 200});
});

apiCall.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("This will be printed always");
});      