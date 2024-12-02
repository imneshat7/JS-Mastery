// let index = 0
// while (index <= 10) {
//     // console.log(`value of index is ${index}`)
//     index++
    
// }

// let myArray = ["superman","batman","spiderman"]
// // let arr = 0
// while (arr < myArray.length) {
//     // console.log(myArray[arr]);
//     arr++
       
// }

// let score = 11
// do {
//     // console.log(`score is ${score}`);
//     score++
// } while (score<=10);


// const arr1 = [1,2,3,4,5]
// for (const element of arr1) {
//    console.log(element);
    
// }

// const str1 = "Hello World!"
// for (const element of str1) {
//     console.log(element);
    
// }

const map = new Map()
map.set('IN', "INDIA")
map.set('SZ', "SWITZERLAND")
map.set('AU', "AUSTRALIA")
map.set('IN', "INDIA")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key ,':-',value);
    
// } 

const myObject = {
    rb : "ruby",
    js : "JavaScript",
    cpp : "C++",

}
for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`);
    
}

const programming = ["js","python","java"]
// for (const key in programming) {
//     console.log(programming[key]);
    
// }

// programming.forEach( function (val){
//     console.log(val);
    
// })

// programming.forEach( (i)=>{
//     console.log(i);
       
// })

// function printMe(val){
//     console.log(val);
    
// }
// programming.forEach(printMe)

// programming.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// } )

const myCoding = [
    {
        languageName : "JavaScript",
        languagefileName : "JS"
    },
    {
        languageName : "Python",
        languagefileName : "Py"
    },
    {
        languageName : "Java",
        languagefileName : "Java"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languagefileName);
    
} )
