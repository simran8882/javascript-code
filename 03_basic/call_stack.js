//javascript execution context:javascript koi bhi file kaise run or execute kregi ...do phase me kregi 
//global execution context jisme this variable ke andar isko rkh diya jata hai
//javascript is single threaded
//functional executional context
//eval execution context
//two phases are memory creation phase(bss memory allocation hota h isme) and execution phase
// let us take an example
/*
let val1=10;
l;et val2=5;
function addNum(num1,num2){
let total=num1+num2
return total;
}
let result1=addNum(val1,val2)
let result2=addNum(10,2);

first execution step 
1 global execcution (this var ke andar store ho jayega)
2 memory phase (only var allocate hoga )
    val1 ->undefined
    val2 ->undefined
    addNum->defintion of the whole func as it is
    result1->undefined
    result2->undefined
3 exection phase
val1->10
val2->5
addNum(kuch nhi hoga defintion already hold kri h kuch execute nhi krna isme so yeh alg executional context bnayega alg se ek box new var environment and execution thread joh ki jitni baar function execute hoga utn i
 baar bnega joh box me ab dubara se memory and execution phase hoga )


 //cal stack (LIFO MANNNER FOLLOW KRTA HAI IF THERE ARE ONE,TWO,THREE FUNCTION THEN THREE WILL OUT FIRST )
 










*/