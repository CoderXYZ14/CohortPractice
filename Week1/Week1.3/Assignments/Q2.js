//Calculate the time it takes between a setTimeOUt call and the inner function actually run
function call(){

}
setTimeout(()=>{
    let innerDate=new Date();
    let innerTime=innerDate.getTime();
    call();
    let outerDate=new Date();
    let outerTime=outerDate.getTime();
    console.log(outerTime-innerTime);
},1000);