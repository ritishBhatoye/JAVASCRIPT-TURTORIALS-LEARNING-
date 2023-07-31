// const o={
// js:'JavaScript',
// cpp:'C++',
// rb:'ruby',
// swift:'swift by APPLE'
// }

// for(const k in o){
//     console.log(`${k} : ${o[k]}`);
// }

// const prog=["JS","C++","JAVA","PYTHON","R","RUBY"];
// for(const k in prog){
//     console.log(prog[k]);
// }
// const c=["JS","RUBY","JAVA","PYTHON","CPP"];
// //c.forEach((i)=>console.log(i));
// // c.forEach((i,index,c)=>{
// //     console.log(i,index,c)
// // })
// //FOR EACH FOR LOOPING INTO OBJECT
// const code=[
//     {
//         languageName:"Javascript",
//         languageFileName:"JS"
//     },
//     {
//         languageName:"Python",
//         languageFileName:"PY",
//     },
//     {
//         languageName:"C++",
//         languageFileName:"CPP"
//     }
// ]
// code.forEach((i)=>{console.log(`${i.languageName} :- ${i.languageFileName}`)})

// //FILTER:- It is quite similiar to other LOOPING METHOD the only difference is that it requires the CONDITION for printing
//const myNums=[1,2,3,4,5,6,7,8];

// const N=myNums.filter((n)=>n>4);
// console.log(N)
// const n=[1,2,3,4,5,6,7,8,9,10]

// const N=n
//          .map((num)=>num*10)
//          .map((num)=>num+1)
//          .filter((num)=> num>=40)
//  console.log(N)
// const N=[1,2,3]
// const Sum=N.reduce((a,c)=>{
//     console.log(`acc: ${a} and currval : ${c}`)
//     return a+c
// },0)
//  console.log(Sum)
const shoppingCart=[
    {
     itemName:"React Course",
     price:300,
    },
    {
     itemName:"Python Course",
     price:600,
    },
    {
     itemName:"MERN",
     price:800,
    },
    {
        itemName:"React-Native",
        price:200    
    }
]
const SumPrice=shoppingCart.reduce((a,item)=>a+item.price,0)
console.log(`${SumPrice} is TOTAL PRICE`)
