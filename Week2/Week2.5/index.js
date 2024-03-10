const express = require("express");
const app = express();

//Returns the sum
/** 
function sum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", (req, res) => {
  const n = req.query.n;
  const ans = sum(n);
  res.send(`The sum is ${ans}`);
});
*/
//Lets create an in memory hospital
/** 
GET-User can check how many kidneys they have and their health
POST- User can add a new kidney
PUT-User can replace a kidney, make it healthy
DELETE-User can remove a kidney
*/
let users = [
  {
    name: "Shahwaiz",
    kidneys: [
      {
        healthy: false,
      },
      // {
      //   healthy: true,
      // },
    ],
  },
];
app.get("/", (req, res) => {
  const shahwaizKidney = users[0].kidneys;
  const noOfKidneys = shahwaizKidney.length;
  let noOfHelathyKidneys = 0;
  console.log(noOfKidneys);
  for (let i = 0; i < noOfKidneys; i++) {
    if (shahwaizKidney[i].healthy) noOfHelathyKidneys++;
  }
  let noOfUnhealthyKidneys = noOfKidneys - noOfHelathyKidneys;
  res.json({
    noOfKidneys,
    noOfHelathyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.use(express.json());
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "Healthy Again",
  });
});

app.delete("/", (req, res) => {
  //what should happen if there is no kidney
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  if (atleastOneUnhealthyKidney) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "Done",
    });
  } else {
    res.status(411).json({
      msg: "U have no bad kidneys",
    });
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
