function validateHttpStatus(code){
    if (code>=200 && code < 300){
        console.log("Request is fine");
    }
    else console.log("Issue with the request, please retry");
}

const validatehttpStatus1 = function(code1){
     if (code1>=200 && code1 < 300){
        console.log("Request is fine");
    }
    else console.log("Issue with the request, please retry");
}

const validatehttpStatus2 = function(code2){
    if (code2>=200 && code2 < 300){
        console.log("Request is fine");
    }
    else console.log("Issue with the request, please retry");

}

validateHttpStatus(201);
validatehttpStatus1(200);
validatehttpStatus2(300);