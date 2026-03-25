// //scope about three characters (let,var,const)
// let a=10
// const b=20;
// var c=30;

// {}//scope yhi curly braces hai used with if-else,functions etc
// console.log(a);//10
// console.log(b);//20
// console.log(c);//30
// let a=300;
// if(true){
//     let a=10
//     const b=20;
//     var c=30;
//     console.log("INNER:",a);//INNER: 10
// }
// //console.log(a);//output a is not defined
// //console.log(b);//similarly for b
// console.log(c);//30(isiliye yeh use nhi hota kyuki iska scope thik nhi hota)
// console.log(a);//300
 
// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
    
// }
//node ke andar global scope and windows(browser) ke andar global scope dono alg hota hai


//nested scope
function one(){
    const username="hitesh"
    function two(){//nested funtion 
      const website="youtube"
      console.log(username);//here we wanna see if we can access useranem inide the another function

    }
   //console.log(website);//error aage flow hoga hi nhi control
   two();
}
one();
//output:hitesh

if(true){
    const username="hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username+website);//hitesh youtube
    }
    //console.log(website);//error:website is not defined
}
//console.log(username);//error:username is not defined


//+++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++++++
console.log(addone(5))//6 isme upr se bhi function call kr skte hai but niche jaise variable ke help se nhi kr skte 
function addone(num){
return num+1;
}
//console.log(addone(5));//6
addTwo(5);//it will give error cannot access addTwo before initialization
const addTwo=function(num){//yeh another technique hai function bnane ki var me store krke
    return num+2;
}
 