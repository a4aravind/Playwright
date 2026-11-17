class Car {
        #engine; // private
        
        constructor(name, engineName) {
          this.name = name;
          this.#engine = engineName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(engineName) {
        this.#engine = engineName;
    }
}

let ford = new Car("Ford Fiesta", "Duratorq CLXI");
console.log(ford.getEngine());
ford.setEngine("Duratorq 1.6 TDCI");
console.log(ford.getEngine());
