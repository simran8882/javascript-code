// //making an obj
// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
        
        
//         console.log(`${this.username},welcome to website`);//this keyword current context(scope) ko refer karta hai 
//        console.log(this);
//     }                   //hitesh,welcome to website
//                         // {
//                         //   username: 'hitesh',
//                        //   price: 999,
//                        //   welcomeMessage: [Function: welcomeMessage]
//                       // }
//                       // sam,welcome to website
//                      // {
//                     //   username: 'sam',
//                    //   price: 999,
//                    //   welcomeMessage: [Function: welcomeMessage]
//                   // }
    


// } 
// //REMEMBER :ARROW FUNCTION ME THIS KEYWORD USE NHI HOTA

// // user.welcomeMessage();
// // user.username="sam";
// // user.welcomeMessage();//sam ,welcome to website
// console.log(this);//{} node me empty object but in the browser the output will be window (global object)

// function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined (we cannot use this inside the fucntion)
// }
// chai();



// const chai=function(){
//     let username="simran"
//     console.log(this.username);//undefined same as above
// }
// chai()


// //function declaration using arrow function
// const chai=() => {
//     let username="hitesh"
//     console.log(this.username)//undefined
//     console.log(this);//{}
// }
// chai()


// const addTwo=(num1,num2)=>{//(Arrow function)
//     return num1+num2;
// }
// console.log(addTwo(3,4));//7

//we can use arrow functon as implicit return in which we do not have to use parenthesis
//const addTwo=(num1,num2)=>num1+num2 //we can use it with () also
//const addTwo=(num1,num2)=>(num1+num2);//in the curly braces {} we have to write return keyword but in () we do not use return 
// const addTwo=(num1,num2)=>{username:"hitesh"}//undefined ,because we cannot use { } in the object while using arrow function but we habe to use this bracket {()}
 const addTwo=(num1,num2)=>({username:"hitesh"})//username:'hitesh'

console.log(addTwo(3,4)); 

