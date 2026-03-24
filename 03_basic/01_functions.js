//functions:code ko package me band kr diya h jiski copy hum le jaa skte h
//function ke help se ek kaam ko baar baar kra skte h
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");

// }


// //sayMyName//reference output me kuch nhi aayega
// sayMyName()//execution ,output// H
// // I
// // T
// // E
// // S
// // H

//function to add two numbers
// function addTwoNumber(number1,number2){//js me type nhi dete number ka
//  console.log(number1 + number2);
// }
// addTwoNumber();//output:NaN(not a number)
// addTwoNumber(3,4);//7
// addTwoNumber(3,"4");//34
// addTwoNumber(3,"a");//3a
// addTwoNumber(3,null);//3

// parameter inside the function and while passing it is called as arguments
// const result=addTwoNumber(3,5)//8
// console.log("Result: ",result);//undefined(function se wapas kya kiya joh ki undefined hai )

//so now we will write function in another method 

// function addTwoNumbers(number1,number2){
// let result=number1+number2
// return result;
// console.log("simran");//yha pe yeh kbhi print nhi hota hai kyuki return ke niche ka kaam nhi hota h


// }
// const result=addTwoNumbers(3,5)
// console.log("Result:",result);//8

// function loginuserMessage(username){//if we declare function with default value then undefined wala if kbhi chalega hi nhi i.e. function loginUserMessage(username="sam")
//     if(username === undefined){ //or we can write it as if(!username){}
//      console.log("please enter an username ");
//      return 
//     }
    
//     return `${username} just logged in`;
// }
//  console.log(loginuserMessage("simran"));//simran just logged in
//  console.log(loginuserMessage());//please enter an username 
//                                  //undefined
               
                                 
function calculateCartPrice(num1){
   return num1;
}
console.log(calculateCartPrice(200));
//now if we pass multiple paramters 
//... known as rest operator and spread depends on their use case 
// function calculateCartPrice(...num1){
//    return num1;
// }
// console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ] (output in the array format)
function calculateCartPrice(val1,val2,...num1){
   return num1;
}
console.log(calculateCartPrice(200,400,500,2000))//[500,2000] (b/c val1 =200 and val2=400 so num1 is rest of the numbers)

//object ko function me kaise use kiya jata h aur kaise pass kiya jata h
const user={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//yha pe johabstract kr rhe h object se like username and price 
    // woh actual me hai bhi ya nhi agr nhi hoga toh undefined aa jayega
}  
//handleObject(user)//Username is hitesh and price is 199
handleObject({
    username:"sam",
    price:399
})//Username is sam and price is 399

//now how to pass array in an function

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));//400
//we can pass array manually Also
console.log(returnSecondValue([200,300,800,900]));//300

//scope or lexical scope padhenge Aage