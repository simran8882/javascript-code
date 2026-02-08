/*console.log(2>1)//true
console.log(2<1)//false
console.log(2!=1)
console.log(2==1)
console.log(2>=1)

console.log("2">1)//true
console.log("02">1)//true(automatically conversion into the number)

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true(yeh true aa rha h kyuki comparison me null number me 
// convert ho jata h (0).toh 0>=0 true hai but == ke case me yeh different behave krta h aur fomaprision (>,<,>=,<= )ke case me alg )


console.log(undefined==0)//false
console.log(undefined>=0)//false
console.log(undefined>0)//false sbke liye 

//=== values ko strictly check krta h with the dattype
*/
console.log("2"===2) //false kyuki ab yeh datatype bhi check krega joh ki same nhi h



/****************************datatypes_summary******************** */
//primitive(call by value)

//7 types(string,number,null,boolean,undefined,symbol,bigint)
//javascript ek dynamically type language hai kyuki iska datatype runtime pe defin hota h
//example:const name="simran";
//const age=13
//symbol unique bnata h 
//example: const id=Symbol("123")
//const another_id=Symbol("123")
//console.log(id===another_id)//false because same nhi h but unique h



//reference type(non-primitive)(call by reference)
//types:array,objects,functions

//const heros =["shaktiman","naagraj","doga"]
//object
/*
let myObj={
   name="simran",
   age=22,
}
const myFunction=function(){
   console.log("hello world");
}

kisi ka datatype jaan ne ke liye typeof use kro


console.log(typeof myfunction);//output:function dikha rha h yha pe but
 documentation me detail me pdho toh object hota h non-primitive ka datatype
function ka datatype object function hota h

*/



/*************************MEMORY**************** */

/* stack memory(primitive),heap memory(non-primitive)
let myname="Simran rawat",yeh primitive hai toh yeh stack ke andar jayegi
let another_name=myname
console.log(another_name)//simran rawat
another_name=deepanshu//deepanshu kyuki stack me copy pe access milta h 


ab dekhte h heap ko
let userone={
email:simran@gmail.com
upi=asdqwda
}
let usertwo=userone

usertwo.email=rawat@gmail.com
console.log(userone.email)
console.log(usertwo.email)
yha pe in dono ke output same hi aayenge kyuki yeh object h joh ki non-primitive h
 toh isko memory allocate heap me hogi joh ki reference se hoti h



*/