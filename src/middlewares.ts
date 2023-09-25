import { NextFunction, Request, Response } from "express";
import { marketDataBase } from "./database";

export const productNameValid = (req: Request , res:Response , next:NextFunction) => {
    if(marketDataBase.some(product => product.name === req.body.name)){
        return res.status(409).json({ message : "Product already registered." });
    }
    next()
}

export const productIdValid = (req : Request , res : Response , next : NextFunction) => {
    if(!marketDataBase.some(product => product.id === +req.params.id)){
        return res.status(404).json({message: "Product not found."})
    }
    next()
}