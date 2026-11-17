class Person{
    #child1; //Private
    #child2; //Private
    
    constructor(name1,child1,child2){
        this.name1 = name1;
        this.#child1=child1;
        this.#child2=child2;
    }

    getChild(){
        return this.#child2;
    }

    setChild(newName){
        this.#child2 = newName;
    }
}

let person1 = new Person("Aravind", "Gowreesh", "Gowthami");
console.log(person1.name1);
//console.log(person1.#child1); since it is private
//console.log(person1.#child2); since it is private

console.log(person1.getChild());
person1.setChild("Gayathri");
console.log(person1.getChild());

person1.name1 = "Suresh";

console.log(person1.name1);
