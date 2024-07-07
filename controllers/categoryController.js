import Category from '../models/categoryModel.js';

// Crear una nueva categoría
async function createCategory(req, res) {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener todas las categorías
async function getCategories(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createCategory, getCategories };
