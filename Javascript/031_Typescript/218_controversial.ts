function infiniteLoop(): never{
    while(true){}
}

function throwError(message: string): never{
    throw new Error("This function always throws an error" + message);
}
