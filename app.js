import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import ProductRouter from "./routers/product.router.js"
import yogaRouter from "./routers/yoga.router.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/ayurveda")
.then(result=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use("/product",ProductRouter);
    app.use("/yoga",yogaRouter);
    app.listen(3000,()=>{
        console.log("server start");
    })
})
.catch(err=>{
    console.log(err);
})