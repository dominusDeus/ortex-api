const express = require('express');
const app = express();
const usersRoute = require('./routes/users');
const cors = require("cors");

// const corsOptions = {
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200
// }
app.use(cors());

app.use("/login", usersRoute);


const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
  console.log("up and running!");
})
