class Credentials{
    #apiKey;

    constructor(user, key){
        this.user = user; //this is not private, it is public
        this.#apiKey = key; //this is private
    }

    getAPI(){
        return this.#apiKey;
    }
}

let cred1 = new Credentials("admin", "<example-api-key>");
console.log(cred1.user);
//cred1.#apiKey wont be accessible since it is private
