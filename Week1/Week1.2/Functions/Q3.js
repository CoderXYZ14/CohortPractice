//Write another fn that displays the result in Q1 in passive way
import { sum } from './Q1.js';
function displayResultPassive(data){
    console.log("result :",data);
}

sum(4,5,displayResultPassive);