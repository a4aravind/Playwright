interface APIResponse{
    statusCode: number;
    body?: string; // optional because GET request may not have body    
    headers?: object;// optional because GET request may not have headers
    responseTime:number;
}

//  GET -> body optional
// POST -> important

const responseDataGET: APIResponse = {
    statusCode:200,
    responseTime: 200
}

const responseDataPOST: APIResponse = {
    statusCode:200,
    body : "{'name':'pramod'}",
    responseTime: 200,
    headers : {}
}
