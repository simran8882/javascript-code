/*let score="33abc"//not a pure number but during typeconversion the output will
//  show number but is is not as when you print the number it will 
// show NaN(not a number)

console.log(typeof score)

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


let scored=null

console.log(typeof scored)

let valueInNumbered=Number(scored)
console.log(typeof valueInNumbered)
console.log(valueInNumbered)
//null me type object print hoga aur type conversion ke var me 0 
// and undefined me dono hi zero honge

/*
let islogged="";
let isloggedin=Boolean(islogged);
console.log(isloggedin)
//1->true,0->false
//""->false
//"simran"->true

let someNumber=33
let somestring=String(someNumber)
console.log(somestring);
console.log(typeof somestring);
*/
//string me convert ho jayega

//***********************operations****************************//

let value=3
let negvalue=-value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2**3)//power
console.log(2/3)
console.log(2%3)

let str1="simran"
let str2=" rawat"
let str3=str1+str2
console.log(str3);

console.log(1+"2")//output 12
console.log("1"+2)//output 12
console.log("1"+"2")//output 12
console.log("1"+2+2)//output:122
console.log(1+2+"2")//output:32
console.log(true);//output:true
console.log(+true);//output:1
console.log(+"")//output:0

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++
console.log(gameCounter)//101(postfix)

let gameCounters=100
++gameCounters
console.log(gameCounters)//101(prefix)

