const myNumber = [1, 2, 3]
// const newNumber= myNumber.filter((num) => num >5)
// console.log(newNumber);

// const myNums =[]
// myNumber.forEach( (num)=>{
//     if (num >5) {
//        myNums.push(num) 
//     }
// } )
// console.log(myNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (bk) => bk.genre === "History") 
  const userBooks = books.filter( (bk) =>{
    return bk.publish >= 1995 && bk.genre === "History"
  })
//   console.log(userBooks);
// const myNums=myNumber
// .map( (num) => num *10)
// .map( (num) => num + 1)
// .filter ( (num) => num >40)
// 
// console.log(myNums);

const myNums= myNumber.reduce( (acc,curr) => {
    return acc+curr
},0)
// console.log(myNums);

const shoppingCart = [
    {
        itemName:"js course",
        price:999

    },
    {
        itemName:"py course",
        price:9999

    },
    {
        itemName:"data science course",
        price:12999

    },
    {
        itemName:"mobile developmet course",
        price:599

    },
]

const addPrice = shoppingCart.reduce( (acc,curr) => {
    return acc + curr.price
},0)
console.log(addPrice);



  




