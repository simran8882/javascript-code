// const userEmail="hitesh@gmail"
// if(userEmail){
//     console.log("Got User Email");//Got User Enail
// }else{
//     console.log("Don't have user email");
// }

// const userEmail=""//or [](empty array) in place of "" output will be Got User Email
// if(userEmail){
//     console.log("Got User Email");
// }else{
//     console.log("Don't have user email");//Don't have an email

// }
//falsy values:false,0,-0,BigInt 0n,"",null,undefined,NaN(not a number)
//truthy values:except falsy and "0",'false',"false"," ",[],{},function(){}
// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Array is empty");
// }
const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("Object is empty");
}


//Nullish coalescing operator (??):null undefined
let val1;
// val1=5 ?? 10//pahle wali val print hogi but agr null h toh joh dusri present h qoh assign krdo

// console.log(val1);
// let val2=null??10
// console.log(val2);
// val1=undefined ??15
// console.log(val1);//15
val1=null??10??20
console.log(val1);//10 (first non null value will assign to it)//yeh sn error handle krne ke liye hota h

//ternary operator
//condition? true:false
const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80")
//less than 80

