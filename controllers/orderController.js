import Order from '../models/orderModel.js';

// Crear un nuevo pedido
async function createOrder(req, res) {
    try {
        const { user, products, total } = req.body;
        const newOrder = new Order({ user, products, total });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Obtener todos los pedidos
async function getOrders(req, res) {
    try {
        const orders = await Order.find().populate('user').populate('products');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createOrder, getOrders };
