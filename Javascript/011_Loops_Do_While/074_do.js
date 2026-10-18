let retry = 0;

do {
    console.log("Executing the code....")
    console.log("Retrying...", retry);
    retry++;
    console.log("Retry value is now...", retry);
} while (retry < 3);