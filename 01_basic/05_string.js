//string ka modern syntax
const name="simran"
const age=12
console.log(name+age+"value")//output:simran12value,
// this syntax is outdated not recommended to use
console.log(`Hello my name is ${name} and my age is ${age}`)//modern syntax of string
console.log(`hello my name is ${name.toUpperCase()}`)//SIMRAN

const gameName = new String("simran___")
console.log(gameName[0])//s
//prototype access krne ke liye
console.log(gameName.__proto__);//{}(empty object hai yeh )

console.log(gameName.length)//9
console.log(gameName.toUpperCase())//SIMRAN___
console.log(gameName.charAt(2));//m
console.log(gameName.indexOf('r'));//3 ,simran___ string me r kaun se index/position pe h

const gamename="simran-rawat"
const newString=gamename.substring(0,5)//substring me negative value nhi de skte agr di toh woh negative ki place pe humesha 0 lega
console.log(newString);//simra


const anotherString = gamename.slice(-11,4)//slicw bhi substring jaisa h but 
// isme negative value de skte h jisse ki woh piche se start krta h i.i size of string 12-11=1 so(1,4) output:imr
console.log(anotherString)//imr

//trim and replace method
//trim joh spaces hote h unko hta deta h
const stringone="    simran     "//    simran
console.log(stringone)
console.log(stringone.trim())//simran(trim the extra spaces joh ki user glti se de deta h)

const url="https://simran.com/simran%20simran"//browser spaces ko nhi smjhta h 
//  woh usko kisi value me change kr deta h jaise ki %20 space ki jgh aisa hum nhi chahte toh methods h uske 

console.log(url.replace("%20","_")) //yha pr %20 ko replace kr diya h _ isse so new output:https://simran.com/simran_simran
console.log(url.includes('simran'))//include btata h ki string me simran h ya nhi true ya false
console.log(url.includes('_'))//false
console.log(url.includes('%20'))//true

//converting string to array

const stringtwo="simran-rawat-Com"

console.log(stringtwo.split('-')) // ['simran','rawat','com']split hogya on the basis of - aur array me convert ho gya of  
const stringthree="simran rawat Com"

console.log(stringthree.split(' '))//split on the basis of space

const s="hellojii"
console.log(s.bold())
console.log(s.fontcolor('blue'))
console.log(s.fontsize(5))
console.log(s.constructor)//[function:string]//btata h object kis type ka h
