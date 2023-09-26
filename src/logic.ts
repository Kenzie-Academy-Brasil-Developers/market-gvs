import { Request, Response } from "express";
import { marketDataBase } from "./database";
let lastId = 1;
import { Products } from "./interfaces";
export const createProduct = (req: Request, res: Response) => {
  const dataAtual = new Date();
  dataAtual.setDate(dataAtual.getDate() + 365);
  const newProduct : Products = {
    id: lastId++,
    name: req.body.name,
    price: req.body.price,
    weight: req.body.weight,
    calories: req.body.calories,
    section: req.body.section,
    expirationDate: dataAtual,
  };
  marketDataBase.push(newProduct);
  return res.status(201).json(newProduct);
};

export const getProducts = (req: Request, res: Response) => {
  const total = marketDataBase.reduce((acc, product) => acc + product.price, 0);
  let response = {
    total: total,
    products: marketDataBase,
  };
  return res.status(200).json(response);
};

export const getProductById = (req: Request, res: Response) => {
  const productId = marketDataBase.find(
    (product) => product.id === +req.params.id
  );
  return res.status(200).json(productId);
};

export const deleteProductById = (req: Request, res: Response) => {
  const index = marketDataBase.findIndex(
    (product) => product.id === +req.params.id
  );
  marketDataBase.splice(index, 1);

  return res.status(204).json({ message: "Product deleted sucessfully!" });
};

export const updateProductById = (req: Request, res: Response) => {
  const product = marketDataBase.find(
    (product) => product.id === +req.params.id
  );
  const newProduct : Products = { ...product, ...req.body };
  const index = marketDataBase.findIndex(
    (product) => product.id === +req.params.id
  );
  marketDataBase.splice(index, 1, newProduct);
  return res.status(200).json(newProduct);
};
