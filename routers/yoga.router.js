import express from "express";
import { addYoga,addInBulkYoga, getAll, updateYogaByName, removeYogaByName } from "../controller/yoga.controller.js";


const router=express.Router();

router.post("/addYoga",addYoga);
router.post("/add-in-bulk-yoga",addInBulkYoga ) 
router.get("/getAll",getAll);

router.put("/updateYogaByName",updateYogaByName);
router.delete("/removeYogaByName",removeYogaByName);

export default router;
