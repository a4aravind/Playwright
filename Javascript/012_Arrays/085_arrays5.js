let browsers = ["edge", "chrome", "opera", "safari", "brave"];
console.log(browsers);

browsers.pop();
console.log(browsers);

browsers.shift();
console.log(browsers);

for(let i=0; i< browsers.length;i++){
    console.log(browsers[i]);
    if(browsers[i] == "opera"){
        console.log("Opera no more exists for automation");
    }
}
