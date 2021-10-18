import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/Products.js";

import express from "express";

const router = express.Router();
router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.patch('/:id',updateProduct);
router.post('/',createProduct);
router.delete('/:id',deleteProduct);
export default router;