const express = require("express");
const zod = require("zod");
const app = express();

//simple if else condition used
/*
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidney = req.query.kidneyId;

  if (!(username === "shahwaiz" && password === "islam")) {
    res.status(400).json({ msg: "Something up with inputs" });
    return;
  }

  if (kidney != 1 || kidney != 2) {
    res.status(400).json({ msg: "Something up with inputs" });
    return;
  }

  res.json({
    msg: "Your kidney is fine",
  });
});
*/
//using middlewares
/*
function useMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "shahwaiz" && password != "islam") {
    res.send(403).json({
      msg: "Something up with inputs",
    });
  } else {
    next();
  }
}
function kidneyMiddleware(req, res, next) {
  const kidney = req.query.kidneyId;
  if (kidney != 1 || kidney != 2) {
    res.status(400).json({ msg: "Something up with inputs" });
  } else {
    next();
  }
}
app.get(
  "/health-checkup",
  useMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("Your kidney is healthy");
  }
);
*/

//count the no of requests
/*
let noOfRequests = 0;
function calculateRequest(req, res, next) {
  console.log(++noOfRequests);
  next();
}
app.use(calculateRequest);
app.post("/health-checkup", () => {
  res.json({
    msg: "hi there",
  });
});
app.get("/health-checkup", () => {});
*/
const schema = zod.array(zod.number());
//count length of kidneys
app.use(express.json());
app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  // const kidneyLength = kidneys.length;
  // res.send("You have " + kidneyLength + "kidneys");
  if (!response.success) {
    res.send(411).json({
      msg: "Input is invalid",
    });
  } else {
    res.send({
      response,
    });
  }
});
// app.use(function (err, req, res, next) {
//   res.send({
//     msg: "Sorry something is up with our server",
//   });
// });
app.listen(3000);
