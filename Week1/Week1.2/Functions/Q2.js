//Write another fn that displays the result in Q1 in pretty way
import { sum } from './Q1.js';
function displayResult(data){
    console.log("The result is :",data);
}

sum(4,5,displayResult);