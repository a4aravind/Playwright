function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T } {
    return { statusCode: statusCode, data: data };
}

let userResp = wrapResponse(200, "admin");
console.log(userResp);

let flagResp = wrapResponse(200, true);
console.log(flagResp);