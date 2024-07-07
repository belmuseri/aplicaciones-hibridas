import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }], // Relación con Product
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
