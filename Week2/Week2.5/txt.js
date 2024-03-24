const express = require("express");
const fs = require("fs");
const app = express();
//any one can remotely read my files
app.get("/files/:fileName", (req, res) => {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, "utf8", (err, data) => {
    res.json({ data });
  });
});
app.listen(3000);
