//Game
type keyPress="Up" |"Down"|"Left"|"Right";//done so that developers know that wrong input passed at line 8.
function doSomething(keyPressed:keyPress){
    //
}
doSomething("Up");
doSomething("Down");
//doSomething("Gonjsb");

//better way to use enums
enum Direction{
    Up,//on console.log 0
    Down,//1
    Left,//2
    Right//3
}
function doFunc(keyPressed:Direction){
    //do something
    if(Direction.Up){

    }
}
doFunc(Direction.Up);
console.log(Direction.Left);


//Generics
function identify <T>(arg:T):T{
    return arg;
}
let out=identify<string>("Hello World");
let out2=identify<number>(1);
console.log(out," ",out2);


//Use1 Generic
function getFirstEle<T>(arr:T[]):T{
    return arr[0];
}
const el=getFirstEle(["Shahwaiz","Islam"]);
console.log(el);