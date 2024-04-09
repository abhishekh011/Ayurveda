import { Product } from "../model/product.model.js";

export const deleteProduct = async  (request,response,next)=>{
    try{ 
     let id = request.params.id;
     let product = await Product.findOne({_id:id});
     if(product){
       await Product.deleteOne({_id:id});
       return response.status(200).json({message: "Product removed"});
     }
     return response.status(401).json({error: "Bad request(id not found)"});
    }
    catch(err){
       return response.status(500).json({error: "Internal server error"});
    } 
 }

 export const byCategory = (request,response,next)=>{
    let category = request.params.category;
    Product.find({category})
    .then((result)=>{
        return response.status(200).json({Result : result});
    })
    .catch((err)=>{
        return response.status(402).json({error:"Bad Request"});
    });
}

 export const getById = async (request,response,next) =>{
        let id = request.params.id;
       Product.findOne({_id:id}).then(result=>{
           return response.status(200).json({Product:result});
       }).catch(err=>{
           return response.status(500).json({Massage:"Internal Server Error"});
       });
 }

export const getProductList = (request,response,next) =>{
    Product.find()
    .then(result=>{
        return response.status(200).json({products: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error"});
    });
}

export const addOneProduct = (request, response, next) => {
    let id = request.body.id;
    console.log(id);
    Product.findOne({ id }).then(product => {
        if (product) {
            return response.status(409).json({ Message: "Product Already Exists" });
        } else {
            Product.create(request.body).then(result => {
                return response.status(200).json({ Message: "Product Added Successfully" });
            }).catch(err => {
                return response.status(500).json({ Message: "Internal Server Error" });
            });
        }
    }).catch(err => {
        return response.status(500).json({ Message: "Internal Server Error" });
    });
}


export const saveInBulk  = async (request,response,next) =>{
        try {
            let productList = request.body;
            for (let p of productList) {
                await Product.create({ id: p.id, title: p.title, description: p.description, price: p.price,
                    stock: p.stock, brand: p.brand, 
                     category: p.category, imageURL : p.thumbnail });
            }
            return response.status(200).json({massage:"product save succes"});
        }
        catch (err) {
            return response.status(500).json({error: "Internal Server Error"});
        }
}
