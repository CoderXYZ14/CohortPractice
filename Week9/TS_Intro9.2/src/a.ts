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

//interfaces
interface User{
    firstName:String;
    lastName:String;
};

function Name(user:User){
    console.log(user.firstName);
}

Name({
    firstName:"Shahwaiz",
    lastName:"Islam"
});

//Interface 2
interface Person{
    name:string;
    greet(phrase:string):void;
}

class Employe implements Person{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}

const e=new Employe("Shahwaiz");
console.log(e.greet("Hi there "));


//Type
// type User={
//     firstName:string;
//     lastName:string;
//     age:number;
// }

//Union first use of type
type StringOrNumber=string |number;

function printId(id:StringOrNumber){
    console.log(`ID:${id}`);
}
printId(101);
printId("123d");

//Intersection second use of type
type Employee={
    name:string;
    startDate:Date;
};
type Manager={
    name:string;
    department:string;
};
type TeamLead=Employee & Manager;
 let teamLead:TeamLead={
    name:"Shahwaiz",
    startDate:new Date(),
    department:"Web"
 };
 console.log(teamLead.name,"",teamLead.startDate,"",teamLead.department);


 //Array to return the max value

function maxValue(arr:number[]):number{
    let maxVal=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxVal)
            maxVal=arr[i];
    }
    return maxVal
}
let arr:number[]=[1,2,3,7,6,4,9,4];
console.log("Max no is ",maxValue(arr));