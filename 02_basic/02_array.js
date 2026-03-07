const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
//marvel_heroes.push(dc_heroes)//tum kya soch rhe ho ki push krne se merge ho jayenge 
//nhi beta yeh merge nhi blki array ke andr array aa jayega yeh rha jii output 
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] isne dc_heroes ko as a k4th element le liya hai ]
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1])//flash
//const myheroes=marvel_heroes.concat(dc_heroes);
//console.log(myheroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//concat do array ko leke new array return kr deta h but push  existing array me push kr deta h


//concat ke place pe spread use krna zyada achaa rhta h jaise kaanch ka glass spread ho jata h
 const all_new_heros=[...marvel_heroes, ...dc_heroes]
 //console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

 const real_another_array= another_array.flat(Infinity)//[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
//]

 console.log(real_another_array);

 console.log(Array.isArray("Hitesh"))//yehbta rha h is ki yeh array nhi hai toh output false aayega

 console.log(Array.from("Hitesh"));//yeh from isko (string,object, kuch bhi) ko array me convert kr deha .output [ 'H', 'i', 't', 'e', 's', 'h' ]
 
//ab key value pair me dete h input from Ko
console.log(Array.from({name:"simran"}))//[] khali output aaya kyuki hume btana pdega key value pair ko convert krna h

let score1=100;
let score2=200;
let score3=300;

//agr set of element ko hume array me convert hota toh from ke jgh .of ko use kro
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]