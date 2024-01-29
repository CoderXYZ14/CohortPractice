function myOwnSetTimeout(callback,duration){
    setTimeout(callback,duration)
}
myOwnSetTimeout(()=>{
    console.log("Hi there using call back");
},1000)
//using promises
function myOwn(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
myOwn(1000)
.then(()=>{
    console.log("Using promises");
})