import express from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProductById } from "../controllers/productController.js";

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProductById);

export default router;
