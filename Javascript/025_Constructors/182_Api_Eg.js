class APIClient{
    constructor(baseURL){
        this.url = baseURL;
    }

    get(path){
        return this.url + path;
    }
}

let staging = new APIClient("https://staging.myapp.com");
let prod = new APIClient("https://myapp.com");

console.log(staging.get("/login"));
console.log(prod.get("/signUp"));
