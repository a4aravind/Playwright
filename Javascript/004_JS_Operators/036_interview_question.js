let temp = 35;

let weather = (temp >= 40) ? "Very Hot" :
                (temp >= 30) ? "Hot" :
                    (temp >= 20) ? "Warm":
                        (temp > 10) ? "Cool" : "Cold";

console.log(`Temperature ${temp} : ${weather}`); // Output: Temperature 35 - Hot, because temp is 35 which is greater than 30 but less than 40
