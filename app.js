import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import yogaRouter from "./routers/yoga.router.js";


const app = express();
mongoose.connect("mongodb://localhost:27017/Ayurveda")
.then(result=>{
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.use("/yoga",yogaRouter);
  
   app.listen(3000,()=>{
    console.log("Server started....");
   })
}).catch(err=>{
    console.log(err);
})