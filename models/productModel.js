// Modelo de Producto
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    img: String
})

const Product = mongoose.model('Product', productSchema);
// Exporto el Objeto Product

export default Product