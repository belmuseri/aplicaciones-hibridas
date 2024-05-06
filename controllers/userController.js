import User from "../models/userModel.js";

async function getUsers( req, res){
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createUser( req, res){
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getUser( req, res){
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteUser( req, res){
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            await user.remove();
            res.status(200).json({ message: 'Usuario borrado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getUsers, createUser, getUser, deleteUser}
