//date millisecond me calculate hoti h january 1 1970 se
//millisecond me date compare hoti h
//let myDate = new Date()
//console.log(myDate)//2026-02-13T12:48:37.534Z
//date ko string me convert krte h 
//console.log(myDate.toString())//Fri Feb 13 2026 12:50:01 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString())//Fri Feb 13 2026
//console.log(myDate.toLocaleString());//2/13/2026, 12:52:00 PM
//console.log(myDate.toISOString());//2026-02-13T12:52:50.393Z 
//up syntax pe depend krta h ki hume kaun sa format chahiye
//console.log(typeof(myDate));//object(important)

//agr hhume koi specific date hi declare krni ho toh 
//let myCreatedDate=new Date(2026, 0, 23)
//console.log(myCreatedDate.toDateString());//month joh h zero se start hote h javascript me means 0 ->january

//agr time bhi include krna ho toh
//let Datebyme=new Date(2026,8,2,4,30)
//console.log(Datebyme.toLocaleString());9/2/2026, 4:30:00 AM

//jb hum YYYY-MM-DD krte h toh january 1 se hi start hota h 
//let myCreatedDate=new Date("2026-02-13")
//console.log(myCreatedDate.toLocaleString());

//india me MM-DD-YY ko jyada prefer krte h
//let myCreatedDate=new Date("02-13-2026")
//console.log(myCreatedDate.toLocaleString())

//timestamps :quiz,poll design krne me use hota h
//let myTimeStamp=Date.now()
//console.log(myTimeStamp)//1770988296630 (millisecond me h 1 jan 1970 se)
//console.log(myCreatedDate.getTime())

//console.log(Math.floor(myTimeStamp/1000));//milliseconds ko second me convert ker diya aur decimal part htane ke liye floor ka use kiya

//aur metohods padh lete h date ke 
let newDate=new Date()
//console.log(newDate)
//console.log(newDate.getMonth()+1)
//console.log(newDate.getDay())//5 denote krta h week day ko i.e. sunday->0,monday->1 aur jb aise likhte h toh iska type object hota h
console.log(`${newDate.getDay()}`)//aise backtick ke andar likhne se internally string me convert ho jata h toh iska type string ho jayega




