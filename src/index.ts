//const express = require("express")
import express, { Request, Response } from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById,
} from "./logic";
import { productIdValid, productNameValid } from "./middlewares";

const app = express();

app.use(express.json());

app.post("/products", productNameValid, createProduct);

app.get("/products", getProducts);

app.get("/products/:id", productIdValid, getProductById);

app.delete("/products/:id", productIdValid, deleteProductById);

app.patch("/products/:id", productIdValid, productNameValid, updateProductById);
app.listen(3000, () => {
  console.log("API started  sucessfully on port 3000!");
});
