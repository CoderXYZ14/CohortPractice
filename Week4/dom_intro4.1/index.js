function populateDiv(){
    const a=document.getElementById("firstNumber").value;
    const b=document.getElementById("secondNumber").value;
    const element=document.getElementById("finalSum");
    console.log(element)
    element.innerHTML=a+b;
}