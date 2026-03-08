//singleton(means constructor se object agr bnega toh singleton bnega)


//Object.create( method to create object using constructor known as singleton)
//another method to create objects :object literals
const mySym=Symbol("key1")//symbol declare kiya h ab aage dekhte h ki symbol ko kaise use kr skte h object me


const JsUser={
    name:"Hitesh",
    //name,age,location,email baaki key bhi email ki format me store hoti h already define h
    "full name":"rawat",
    [mySym]:"mykey1",//yha pe sirf mySym likhte toh woh string hota but symbol ke liye [mysym] likhna hoga 
    age:21,
    location:"UK",
    email:"rawat@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]//as an array bhi input de skte h hum objects me

}
//elements ko access kaise krna h with two tareeke
/*
console.log(JsUser.email)//rawat@gmail.com
console.log(JsUser["email"])//rawat@gmail.com
console.log(JsUser["full name"])//rawat
// (isme full name me gap h beech me toh isko hum . wale method se acess nhi kr skte iske liye square bracket wala hi use krna hoga)
console.log(JsUser[mySym])//mykey1
console.log(typeof mySym)//symbol

JsUser.email="simranrawat@gmail.com"//value change kr di
Object.freeze(JsUser)//object freeze krne se ab value change nhi kr skte
JsUser.age=50
console.log(JsUser["email"])//simranrawat@gmail.com(freeze krne se phle tha toh change ho gya)

console.log(JsUser["age"])//21(freeze ho gya)

console.log(JsUser);
 /* name: 'Hitesh',
  'full name': 'rawat',
  age: 21,
  location: 'UK',
  email: 'simranrawat@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'mykey1'
}*/

//object me symbol toh use kr liya agr hume function krna h toh vaiables ki trh hi use kro jaise ki

JsUser.greeting=function(){
    console.log("Hello Js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting);//[Function (anonymous)]
//yeh krne se function ka reference  aaya hai but function execute nhi hua  h

console.log(JsUser.greeting());//Hello Js user
console.log(JsUser.greetingTwo());//Hello JS user,Hitesh



