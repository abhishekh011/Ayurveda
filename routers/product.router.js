import express from "express";
import { addOneProduct, deleteProduct, getById, getProductList, saveInBulk } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.post("/addone",addOneProduct);
router.get("/getall",getProductList);
router.get("/getbyid/:id",getById);
router.delete("/delete/:id",deleteProduct);


export default router;