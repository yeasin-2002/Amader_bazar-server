import express from "express";
import multer from "multer";
import { CreateDiskStorage, isTokenVerify } from "../middlewares";

import {
    PopularProduct,
    ProvideRating,
    createProduct,
    deleteProduct,
    getAllFeatureProduct,
    getAllProduct,
    getSingleProductById,
    makeFeatureProduct,
    searchProduct,
    updateProduct,
} from "../controller/product.controller";

export const productRoute = express.Router();
const upload = multer({ storage: CreateDiskStorage("products") });

//? Products
productRoute.get("/search", searchProduct); //* Need to add RegEx to Search
productRoute
    .route("/all")
    .get(getAllProduct)
    .post(upload.single("img"), createProduct);

productRoute
    .route("/all/:id")
    .get(getSingleProductById)
    .patch(updateProduct)
    .delete(deleteProduct);

//? Featured
productRoute.route("/feature").get(getAllFeatureProduct);
productRoute.route("/feature/:id").put(makeFeatureProduct);

//?  Most popular
productRoute.route("/popular").get(PopularProduct);

// ? Rating
productRoute.route("/rating").get(isTokenVerify, ProvideRating);
/*
-  All Product 

- Featured Product
- Most Popular/Sold Product 
- discounted Product
*/
