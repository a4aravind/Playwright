async function testAPI(){
    try{
        let result = await Promise.reject("404 Not available");
        console.log(`Result :${result}`);
    }catch(err){
        console.log(`Returned error ${err}`);
    }finally{
        console.log(`End of API testing`);
    }

}
testAPI();
