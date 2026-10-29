const IsPass = (marks) => {
    if(marks> 50) return "Pass";
    return "Fail";
}

console.log(IsPass(65));
console.log(IsPass(32));