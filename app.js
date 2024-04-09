import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import ProductRouter from "./routers/product.router.js"

const app = express();
mongoose.connect("mongodb://localhost:27017/ayurveda")
.then(result=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use("/product",ProductRouter);
    
    app.listen(3000,()=>{
        console.log("server start");
    })
})
.catch(err=>{
    console.log(err);
})