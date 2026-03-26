//IIFE(immediately invoked function expressions)
  //global scope ke pollution se probelm hoti h function me kayi baar toh usko htane ke liye iife ka use kiya 

(function chai(){
    //named iife
    console.log("DB CONNECTED");
})();//paranthesis se block bann jata h aur last me semicolon is imp

//()()//first one for function defintion and second one for func execution

( (name)=> {
    //un named iife passing parameter
    console.log(`DB CONNECTED TWO ${name}`);//DB CONNECTED TWO simran

})('simran')