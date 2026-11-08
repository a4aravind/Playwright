function apiRequest(){
    return new Promise(function (resolve){
        resolve({status: 200});
    }
)};

async function runApiRequest(){ 
    let response = await apiRequest();
    console.log("API Status", response.status); 
}

runApiRequest();
