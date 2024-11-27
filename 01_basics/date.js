let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// let mycreatedDate = new Date(2024,0,20)
// console.log(mycreatedDate.toDateString());


let newDate= new Date()
newDate.toLocaleString('default',{
    weekday:'long'
})
console.log(newDate);

