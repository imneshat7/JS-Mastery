

// function myName() {
// console.log("N");
// console.log("E");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("T");
// }
// myName()


// function loginUsername(username  ="faizan"){
//     if(!username ){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUsername("Neshat")
// );

// function addCartvalue(val1,val2,...num1){
//     return num1
// }
// console.log(addCartvalue(200,400,600,800)
// );

const user = {
    username:"Neshat",
    price:199

}

function objectHandler(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// objectHandler(user)
objectHandler({
    username:"faizan",
    price:766
})

const myNewArray = [300,700,800,1000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([500,800,200]));





