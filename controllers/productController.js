import Product from "../models/productModel.js";

// Obtener todos los productos
async function getProducts( req, res){
    try {
        const products = await Product.find();
        res.status(200).json({ message: 'Productos cargados correctamente', data: products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener un producto por ID
async function getProductById( req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto encontrado', data: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Crear un nuevo producto
async function createProduct( req, res) {
    try {
        const { name, price, stock } = req.body;

        // Validaciones
        if (!name || !price || !stock) {
            return res.status(400).json({ message: 'Falta el nombre, precio o stock' });
        }

        const newProduct = new Product({ name, price, stock });
        await newProduct.save();
        res.status(201).json({ message: 'Producto creado exitosamente', data: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Actualizar un producto
async function updateProduct( req, res) {
    try {
        const { name, price, stock } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, stock }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'El producto no ha sido encontrado' });
        }
        res.status(200).json({ message: 'Producto actualizado', data: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Eliminar un producto
async function deleteProduct( req, res) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'El producto no ha sido enconrtado, no puede ser eliminado' });
        }
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Exporto las funciones
 export { createProduct, getProducts, updateProduct, deleteProduct, getProductById}