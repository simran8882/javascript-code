/*const score=400
console.log(score)//400
const balance=new Number(100)
console.log(balance);//[Number:100]
console.log(balance.toString().length)//3(string ke liye hi length bna h)

console.log(balance.toFixed(2))//100.00

const other=123.8934
//console.log(other.toPrecision(3))//124
//console.log(other.toPrecision(4));//123.9
console.log(other.toPrecision(5))//123.89

const hundreds=1000000
console.log(hundreds.toLocaleString());//1,000,000 
console.log(hundreds.toLocaleString('en-IN'));//indian format me change kr deta h comma lagake
*/
/*********************************MATHS*********************************** */
//console.log(Math);//object[Math]{}
//console.log(Math.abs(-4));//4
//console.log(Math.round(4.5))//5
//console.log(Math.ceil(4.2));//5 ( 4 se jara bhi upr hua toh upper value print krega)
//console.log(Math.floor(4.9));//4(floor niche wali value print krta h)
//console.log(Math.sqrt(3));
//console.log(Math.max(2,3,6,9,10));//similarly Math.min()
console.log(Math.random());//0 se 1 ke beech me value aati h
console.log((Math.random()*10) +1);//*10 kr rhe h kyuki value 1 point aage shift ho jaye aur 
// 1 isiliye add kiya kyuki random value age 0.045 hui toh shift hoke bhi 0.45 rhegi isiliye  1 add kr diya taaki humesha 1 se start ho
console.log(Math.floor(Math.random()*10)+1)
const min =10
const max=20
/**********MOST IMPORTANT**************** */
console.log(Math.floor(Math.random() * (max-min+1) )+min) 