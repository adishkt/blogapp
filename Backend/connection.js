const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://adi:adi@cluster0.btbj8bx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
