let score = 87;

if(score > 100 || score < 0){
    console.log("Not a valid mark");
}else{
    if(score >= 90){
        console.log("A - Excellent");
    }else if(score >=80 && score < 90){
        console.log("B - Very good");
    }else if(score >= 70 && score < 80){
        console.log("C - Good");
    }else if(score >= 60 && score < 70){
        console.log("D - Average");
    }else if(score >= 50 && score < 60){
        console.log("E - Needs improvement");
    }else if(score < 50){
        console.log("F - Fail");
    }else{
        console.log("Not a valid mark");
    }
}

