const express = require("express");
const cors = require("cors");


const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
require("./connection")
var BlogModel=require("./model")
//Write your POST API here
app.post('/add',async(req,res)=>{     
  try {
      await BlogModel(req.body).save()
      res.send("data added")
  } catch (error) {
      console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.put('/edit/:id',async(req,res)=>{
  var id=req.params.id;
  try {
      await BlogModel.findByIdAndUpdate(id,req.body);
      res.send("update done")
  } catch (error) {
      console.log(error);
  }
});

app.delete('/delete/:id',async(req,res)=>{
  var id=req.params.id
  try {
      await BlogModel.findByIdAndDelete(id);
      res.send("Deleted sucessfully")

  } catch (error) {
      console.log(error);

  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
