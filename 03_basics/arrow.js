// const user = {
//     username : "Neshat",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
        
//     }
// }
// // user.welcomeMessage()
// user.username="faizan"
// user.welcomeMessage()

// console.log(this);

function chai(){
    const username ="neshat"
    console.log(this.username);
    

}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username:"neshat"})


console.log(addTwo(7,8));
