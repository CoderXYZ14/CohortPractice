//Wap a prg that reverses all the elements  of an array
let arr=[1,2,3,4,5,6,7];
let length=arr.length;
for(let i=0;i<length/2;i++){
    let temp=arr[length-i-1];
    arr[length-i-1]=arr[i];
    arr[i]=temp;
}
for(let i=0;i<length;i++)
console.log(arr[i]+" ");