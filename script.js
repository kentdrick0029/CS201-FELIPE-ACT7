const password = "p@ssw0rd@2023";

if(password.length >= 13 && password.includes("p@ssw0rd")){
    console.log("Valid password");
}
else{
    console.log("Invalid password");
}