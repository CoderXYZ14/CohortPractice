//WAP to prints all male peoples's first name in a complex object

let obj = [
    {
        fName: "Shahwaiz",
        gender: "Male"
    },
    {
        fName: "ABC",
        gender: "Female"
    }
];

for (let i = 0; i < obj.length; i++) {
    if (obj[i]["gender"] === "Male") {
        console.log(obj[i]["fName"] + " ");
    }
}
