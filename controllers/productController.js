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
        const product = req.body;
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).json({ newProduct});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
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
async function deleteProductById( req, res) {
    try {
        
        const id = req.params.id;
        const products = await Product.findByIdAndDelete( id);
        res.status(200).json({ message: 'Ok', data: products});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

// Exporto las funciones
 export { createProduct, getProducts, updateProduct, deleteProductById, getProductById}