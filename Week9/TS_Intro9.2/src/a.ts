const x:number=1;
console.log(x);

function greet(firstName:string){
    console.log("Hello ",firstName);
}

greet("Shahwaiz");

function sum(a:number,b:number):number{
    let sumC:number=a+b;
    return sumC;
}

let sumC:number=sum(1,2);
console.log("The sum is ",sumC);

function isAdult(age:number):boolean{
    if(age>=18)
    return true;
    else
    return false;
}

if(isAdult(17))
console.log("Adult");
else
console.log("Not Adult");

//Create a fn that takes another fn as input and runs it after 1 sec
function runAfter1S(fn:()=>void){
    setTimeout(fn,1000);
}

runAfter1S(()=>{
    console.log("Hello World");
});