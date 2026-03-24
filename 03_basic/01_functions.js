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

function loginuserMessage(username){//if we declare function with default value then undefined wala if kbhi chalega hi nhi i.e. function loginUserMessage(username="sam")
    if(username === undefined){ //or we can write it as if(!username){}
     console.log("please enter an username ");
     return 
    }
    
    return `${username} just logged in`;
}
 console.log(loginuserMessage("simran"));//simran just logged in
 console.log(loginuserMessage());//please enter an username 
                                 //undefined
                                 
                                 