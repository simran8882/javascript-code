//isme hum baat krenge ki singleton kaise kr skte h OR constructor ke help se kaise kr skte h
//const tinderUser = new Object();
//console.log(tinderUser);//{}(empty object print hua h)

//agr isko pichle object literal ke jaise declarer krte Toh
/*const tinderUser={}
//console.log(tinderUser)//{} same hi outpt ata
//the only difference is ki constructor wala singleton h aur yeh wala non singleton 

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser);//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser={
    email:"some@gmail.com",
    fullname:{//object me object create ke skte h jitni nesting kr skte h
       userfullname:{
            firstname:"simran",
            lastname:"rawat"
       }
    }
}
console.log(regularUser.fullname)//{ userfullname: { firstname: 'simran', lastname: 'rawat' } }
console.log(regularUser.fullname.userfullname)//{ firstname: 'simran', lastname: 'rawat' }

console.log(regularUser.fullname.userfullname.lastname);//rawat
//merging in objects
//const obj1={1:'a',2:'b'}
//const obj2={1:'c',2:'d'}
//const obj3={obj1,obj2};
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }(same problem as array obj2 merge nhi hua bu obj1 me ghus gya h)

//We can do it (merging) using assign
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//const obj3=Object.assign({},obj1,obj2)//{} yeh use krna is not compulsory agr nhi use krenge toh saari value merge ho jayengi obj1 me insted of {}(empty object )

//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//assign ko bhi kam hi use krenge hum use krenge spread ko like in array
const obj3={...obj1,...obj2}
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//ek syntax hum jo use krenge jb database se value aayengi
const users=[//array ka object
    {
        id:1,
        email:"rawat@gmail.com"
    },
    {
        id:1,
        email:"rawat@gmail.com"
    },
    {
        id:1,
        email:"rawat@gmail.com"
    },


]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] isse array ke saare keys aa jayenge humpe

console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]//har key value ko array me bna diya jata h

//agr value exist hi nhi krti toh?? pucho ki value hai?
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('LoggedIn'));//false

//DESTRUCTURING OF OBJECT (IMPORTANT TOPIC)
*/
const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"hitesh"
}

console.log(course.courseInstructor)//hitesh(for more clean code follow the below one)
//const {courseInstructor}=course
const {courseInstructor: Instructor}=course//ab courseInstructor nhi likhna hoga bss instructor likh skte hai 
//console.log(courseInstructor);//hitesh
console.log(Instructor);//hitesh



//API:APNA KAAM KISI AUR KE SARR PE DALNA
//Backend se values aati h in the form of JSON 
/*{
"name":"hitesh",
"coursename":"js in hindi",
"price" :"free"
}//yhi JSON hai like an object without name
 */

//API  array format me bhi hoti hai 
[
    {},
    {},
    {}
]
  