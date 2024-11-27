const jsUser = {
    name : "Neshat",
    age :27,
    email:"neshat306",
}

console.log(jsUser["email"]);
jsUser.greeting = function(){
    console.log("Hello user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello user,${this.name}`);
    
}
console.log(jsUser.greeting());