const jwt = require("jsonwebtoken");

const value = {
  name: "shahwaiz",
  accountNumber: 1212233,
};

const token = jwt.sign(value, "secret");

console.log(token); //if we paste the token in jwt.io can we viewed by anyone
//similar to cheque can we seen and encoded by anyone
