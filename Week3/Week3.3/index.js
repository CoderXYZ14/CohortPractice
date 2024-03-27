const jwt = require("jsonwebtoken");

const value = {
  name: "shahwaiz",
  accountNumber: 1212233,
};

const token = jwt.sign(value, "secret");

console.log(token);
