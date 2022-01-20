const fs = require('fs');
const express = require('express');
const router = express.Router();
const path = require('path');
const pathToFile = path.resolve('./db.json');



router.get("/", (req, res)=>{
  const users = JSON.parse(fs.readFileSync(pathToFile));
  res.status(200).json(users);
})


router.post("/", (req, res) => {
  let reqBody = req.body;
  req.body.id = Date.now().toString();
  const users = JSON.parse(fs.readFileSync(pathToFile));
  users.push(reqBody);

  fs.writeFile(pathToFile, JSON.stringify(users, null, 2), (error) => {
    if (error) {
      return res.status(422).send("Cannot store data in the file!");
    }

    return res.send("Data has been saved!");
  })
  
})



module.exports = router;