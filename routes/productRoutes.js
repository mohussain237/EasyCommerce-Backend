import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc  Fetch all Produtcs
// @route GET/api/products
// @access  public

router.get("/",asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc  Fetch single  Produtc
// @route GET/api/products/:id
// @access  public

router.get("/:id", asyncHandler(async (req, res) => {
    console.log("reach here")
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
);

export default router;
