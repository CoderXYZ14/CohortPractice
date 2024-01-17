//WAP to print the biggest no in an array
let arr=[1,2,3,4,5,6,7,8];
let max=Number.MIN_VALUE;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max)
    max=arr[i];
}
console.log("Max no. is ",max);