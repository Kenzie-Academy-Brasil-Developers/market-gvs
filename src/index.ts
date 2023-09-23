//const express = require("express")
import express, { Request, Response } from "express"


const app = express()

app.use(express.json())
app.get("/products", (req: Request , res: Response) => {
    return res.status(200).json({message : "Olaaa"})
})
app.listen(3000, () => {
    console.log("API started  sucessfully in port 3000!")
})