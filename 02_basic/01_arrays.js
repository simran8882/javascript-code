//array(collection of elements in a single variable),(resizable elments hote h baad me aur elements bhi add kr sklte h)(zero-indexed hoti h)(copy operation pe shallow copy bnata h mtlb ki same reference leta h ek me change toh dusre me bhi change)
//const myArr=[0,1,2,3,4,5,"true","hitesh"]//js me array me different types ke elements bhi store kr skte h
const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);
const myHeroes=["shaktiman","naagraj","batman"]
//another method to declare array
const myArr2=new Array(1,2,3,4,5) 

//Array Methods

myArr.push(6);//push krega myArr me 0,1,2,3,4,5,6
console.log(myArr);
myArr.pop()
console.log(myArr);//0,1,2,3,4,5
myArr.unshift(9);//unshift shift kr deta h starting position se 9,0,1,2,3,,4,5
console.log(myArr);
myArr.shift()//bina parameter ke hota h aur starting value hatt jati h (0,1,2,3,4,5)
console.log(myArr);//0,1,2,3,4,5

console.log(myArr.includes(9));//true false me answer dega output(false)
console.log(myArr.indexOf(1))//0
console.log(myArr.indexOf(9));//-1 means exist hi nhi krta 9 ka index array me

const newArr=myArr.join()//join array ko string me convert kr deta h
console.log(myArr);//[0,1,2,3,4,5]
console.log(newArr);//0,1,2,3,4,5
console.log(typeof newArr);//string

//slice,splice
console.log("A",myArr);//A[0,1,2,3,4,5]
const myn1=myArr.slice(1,3)//1 aur second include hoga 3rd include nhi hoga
console.log(myn1)//[1,2]
console.log(myArr);
console.log("B",myArr);//B [0,1,2,3,4,5]

const myn2=myArr.splice(1,3);//splice me last range include nhi hooti h yeh cheej glt h kahna balki hum yeh khenge ki splice se original array myArr mr splice wali range splice out ho jayegi yaani ki hat jayegi
console.log("C",myArr);//C[0,4,5]
console.log(myn2);//[1,2,3]