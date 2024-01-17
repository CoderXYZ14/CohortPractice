//Create a counter in js(count down from 30 to 0)
let i = 30;
function counter() {
    console.log((i--) + " ");
    if (i < 0) {
        clearInterval(intervalId);
    }
}


let intervalId = setInterval(counter, 1000);
