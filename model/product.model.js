import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    // id          | int           | NO   | PRI | NULL    | auto_increment |
    // | title       | varchar(50)   | NO   |     | NULL    |                |
    // | brand       | varchar(50)   | NO   |     | NULL    |                |
    // | price       | decimal(10,2) | NO   |     | NULL    |                |
    // | description | varchar(500)  | NO   |     | NULL    |                |
    // | imageUrl    | varchar(255)  | NO   | UNI | NULL    |                |
    // | categoryId  | int           | YES  | MUL | NULL    |          
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    imageURL:{
      type: String,
      required: true
  },
    category: {
      type: String,
      required: true
    }
  });
  
 export const Product = mongoose.model('Product', productSchema);
  
 